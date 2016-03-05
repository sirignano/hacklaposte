// Node Require
var http = require("http");
var fs = require("fs");

// External Require
var mime = require("mime");
var express = require("express");
var randomstring = require("randomstring");

// Database Require
var MongoClient = require("mongodb").MongoClient;
var MongoObjectID = require("mongodb").ObjectID;


// Middlewares Require
var logger = require("morgan");
var serveStatic = require("serve-static");
var favicon = require("serve-favicon");
var bodyParser = require("body-parser");

// Global variable
var port = 8080;

// Middleware
var passport = require('passport');
var app = express();

app.use(logger(":method :url"));
app.use(serveStatic(__dirname + "/app"));

// API
var api = express();

api.get("/get_trajet", function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");	
	res.send({trajet: ""});
});

app.use(bodyParser({limit: '5mb'}))

api.post("/add_trajet", function (req, res) {
	res.send({trajet: ""});
});

app.use("/api", api);

http.createServer(app).listen(port);

console.log("Serveur démarré sur le port " + port);

passport.use(new BasicStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.validPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

app.get('/api/me',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json(req.user);
  });

console.log('Hello');
console.log(passport);
