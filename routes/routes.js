// app/routes.js
var Task = require('./../models/tasks');
module.exports = function(app, passport,express,path) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    /*app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });*/
    
    app.get('/api/get/:id', function(req, res){
        // get all the task
        console.log('/api/get/:id =>',req.params.id);
        var user = {};
        user['id']=req.params.id;
        Task.find(user, function(err, tasks) {
        if (err) throw err;
        res.send(tasks);
        });
    });
    app.get('/api/delete/:userid/:id', function(req, res){
        // get all the task
        var user = {};
        user['id']=req.params.userid;
        user['_id']=req.params.id;
        console.log("/api/delete/:userid/:id =>",user)
        Task.findOneAndRemove(user, function(err, tasks) {
            if (err) throw err;
            console.log('Task deleted!');
        });
    });
    app.post('/api/toggle/', function(req, res){
        // get all the task
        var user = req.body;
        var newDone = {};
        if(user.done=='true')newDone['done'] = 'false';
        else newDone['done'] = 'true';
        
        console.log("/api/toggle/ =>",user)
        Task.findOneAndUpdate(user,newDone, function(err, task) {
            if (err) throw err;
            res.json(task);
            console.log('Task Toggled!');
        });
    });
    app.post('/api/add', function(req, res) {
       var task = req.body;
       console.log("Taskkkkk>>>>>>>",task);
       Task.addTask(task,function(err,task) {
        if (err) throw err;
        res.json(task);
        console.log('Task added in Database!');
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
        console.log('Sign up Successful');
        // render the page and pass in any flash data if it exists
        res.json(req.user);
        
    });
    app.get('/signup-failed', function(req, res) {
        //console.log('reqss:',req);
        // render the page and pass in any flash data if it exists
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
        req.logout();
        res.redirect('/');
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