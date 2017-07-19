// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 4200;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var path     = require('path');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var MongoStore = require('connect-mongo')(session);
var configDB = require('./config/database.js');
var nodemailerConfig = require('./config/nodemailerConfig');
var twilioConfig = require('./config/twilioConfig');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database


require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'html'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch',
                  cookie: { maxAge: 20*60*1000  },  // session secret ...maxAge: 60000
                  store: new MongoStore({ mongooseConnection: mongoose.connection }) }))
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//twilioConfig.sendSmsSignupSuccess();
//nodemailerConfig.mailit();
// routes ======================================================================
app.use('/', express.static(path.join(__dirname, '/src/app/dist')));
require('./routes/routes.js')(app, passport,express,path,nodemailerConfig,twilioConfig); // load our routes and pass in our app and fully configured passport
console.log('Buss',path.join(__dirname, '/src/app/dist/index.html'));

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);