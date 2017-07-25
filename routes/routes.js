// app/routes.js
var Task = require('./../models/tasks');
var User = require('./../models/user');
module.exports = function(app, passport,express,path,nodemailerConfig,twilioConfig,jwt,generator) {
    function generatePassword(){
        password = generator.generate({
            length: 10,
            numbers: true
        });
        return password;
    }  
    function generateToken(data){
        console.log("data",typeof(data),data);
       return jwt.sign(data,process.env.JWT_SECRET_KEY,{
                expiresIn : 3000
            });
    }
    function verifyToken(token){
        
        jwt.verify(token,process.env.JWT_SECRET_KEY,function(err,decode){
            if(!decode){
                console.log("Error in verifyToken")
            }
            else{
                console.log("Doe",decode._doc)
                newPassword = generatePassword();
                console.log("New Generated Password",newPassword);
                nodemailerConfig.mailNewPassword(decode._doc.local.email,newPassword);
            }
        })
    }

    app.post('/forgotPassword', function(req, res){
         data = req.body;
        
        User.findOne({'local.email':data.email}, function(err, user) {
            if(user){
                var token = generateToken(user,res);
                nodemailerConfig.mailResetPassword(data.email,token);
                res.send("We have sent a link to your email to reset your password!");
            }
            else res.send("No such user is registered with us");
        });
    });
    app.get('/resetPassword/:token', function(req, res){
        verifyToken(req.params.token);
        res.send("<b>Congrats. Password Reset was done successfully. Check your Email for the new Password.</b><p>Now redirecting to home page in <span id='time'></span> seconds.</p> <script>time=5;setInterval(function(){ console.log('Time',this.time);document.getElementById('time').innerHTML=this.time;this.time--; }, 1000);setTimeout(function(){window.location.href='/'},5000);</script>")
    });
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    /*app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });*/
    
    app.get('/api/get/:userid',checkAuth, function(req, res){
        // get all the task
        console.log("Today's Date:",new Date());
        console.log('/api/get/:userid =>',req.params.userid);
        var user = {};
        user['id']=req.params.userid; //'id' refers to userid ... '_id' refers to task id
        var start = new Date();
        start.setHours(0,0,0,0);

        var end = new Date();
        end.setHours(23,59,59,999);
        user['created_at']={$gte: start, $lt: end};
        Task.find(user, function(err, tasks) {
        if (err) throw err;
        res.send(tasks);
        });
    });
    app.get('/api/delete/:userid/:id',checkAuth, function(req, res){
        // Delete a task
        var user = {};
        user['id']=req.params.userid;
        user['_id']=req.params.id;
        console.log("/api/delete/:userid/:id =>",user)
        Task.findOneAndRemove(user, function(err, tasks) {
            if (err) throw err;
            res.sendStatus(200);
            console.log('Task deleted!');
        });
        
    });
    app.post('/api/toggle/',checkAuth, function(req, res){
        // Toggle the status of a task
        var user = req.body; 
        console.log('From UI ++>', user);
        console.log('From PP ++>', req.user);
        var newDone = {};
        newDone['done'] = !user.done;
        console.log("/api/toggle/ =>",user)
        Task.findOneAndUpdate(user,newDone, function(err, task) {
            if (err) throw err;
            res.sendStatus(200);
            console.log('Task Toggled!');
        });
    });
    //Add New Task
    app.post('/api/add',checkAuth, function(req, res) {
       var task = req.body;
       console.log("Taskkkkk>>>>>>>",task);
       Task.addTask(task,function(err,task) {
        if (err) throw err;
        res.json(task);
        console.log('Task added in Database!');
        });
   });

   app.get('/api/get/:userid/:date',checkAuth, function(req, res){
        // get all the tasks by date
        console.log('/api/get/:userid =>',req.params.userid);
        var user = {};
        user['id']=req.params.userid; //'id' refers to userid ... '_id' refers to task id
        var start = new Date(req.params.date);
        start.setHours(0,0,0,0);
        var end = new Date(req.params.date);
        end.setHours(23,59,59,999);
        user['created_at']={$gte: start, $lt: end};
        Task.find(user, function(err, tasks) {
            if (err) throw err;
            res.send(tasks);
        });
    });
    /*app.get('/loggedIn', function(req, res) {
        if(req.user){
            res.redirect('app/index.html');
        }
        else res.redirect('/login');
    });*/

    /*app.get('/app', function(req, res) {
        if(req.user){
            res.redirect('app/index.html');
        }
        else res.redirect('/login');
    });*/

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    /*app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });*/

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/authenticated', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/authenticated',isLoggedIn,function(req,res){
        res.json(req.user);
    });
    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    /*app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });*/
    app.get('/signup-success', function(req, res) {
        console.log('Sign up Successful',req.user.local.email);
        nodemailerConfig.mailSignupSuccessful(req.user.local.email);
        contactNo = req.user.local.countryCode + req.user.local.contactNumber;
        //twilioConfig.sendSmsSignupSuccess(contactNo);
        res.json(req.user);
        
    });
    app.get('/signup-failed', function(req, res) {
        //console.log('reqss:',req);
        console.log('Console : Sign up Failed');
        res.send('Sign up Failed');
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);
     // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/signup-success', // redirect to the secure profile section
        failureRedirect : '/signup-failed', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    /*app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
        res.redirect("http://google.com")
    });*/

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
         req.session.destroy(function (err) {
            res.redirect('/'); 
        });
    });
    
    
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '/../src/app/dist/index.html'));
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

function checkAuth(req, res, next){
    console.log("Check Auth Hit");
    if(req.method=='POST' && req.user){
        if(req.body.id===req.user.id){
            console.log('Check Auth ID MATCHED');
            return next();   
         }
        
    }
    if(req.method=='GET' && req.user){
        if(req.params.userid===req.user.id){
            console.log('Check Auth ID MATCHED');
            return next();   
         }
        
    }
    console.log('Check Auth ID Not Matched');
    res.redirect('/logout');
    
}

