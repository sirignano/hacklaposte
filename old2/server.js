// // Node Require
// var http = require("http");
// var fs = require("fs");

// // External Require
// var mime = require("mime");
// var express = require("express");
// var randomstring = require("randomstring");

// // Database Require
// var MongoClient = require("mongodb").MongoClient;
// var MongoObjectID = require("mongodb").ObjectID;


// // Middlewares Require
// var logger = require("morgan");
// var serveStatic = require("serve-static");
// var favicon = require("serve-favicon");
// var bodyParser = require("body-parser");

// // Global variable
// var port = 8080;

// // Middleware
// var passport = require('passport');
// var app = express();

// app.use(logger(":method :url"));
// app.use(serveStatic(__dirname + "/app"));

// // API
// var api = express();

// api.get("/get_trajet", function (req, res) {
// 	res.header("Access-Control-Allow-Origin", "*");	
// 	res.send({trajet: ""});
// });

// app.use(bodyParser({limit: '5mb'}))

// api.post("/add_trajet", function (req, res) {
// 	res.send({trajet: ""});
// });

// app.use("/api", api);

// http.createServer(app).listen(port);

// console.log("Serveur démarré sur le port " + port);

// passport.use(new BasicStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.validPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));

// app.get('/api/me',
//   passport.authenticate('basic', { session: false }),
//   function(req, res) {
//     res.json(req.user);
//   });

// console.log('Hello');
// console.log(passport);

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
