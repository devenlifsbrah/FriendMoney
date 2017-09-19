var express = require('express');

var app = express();
var cors = require('cors');

var passport = require('passport');
var User = require('./userSchem');
var mongoose = require('mongoose');
var body = require('body-parser');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
app.use(body.urlencoded({extended: true}));
app.use(require('express-session')({
	secret:'4t8j43g43g9ijei59jiejgeg49u',
	resave:false,
	saveUnitialized: false
}));
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use('/static', express.static('static'));
mongoose.connect('mongodb://127.0.0.1/OpurchaseSchema');


app.route('/Login')
.get(function(req, res, next){
res.sendFile(__dirname + '/login.html');
})
.post(function(req,res, next){
	
})

app.route('/Register')
.post(function(req,res, next){
	User.register({username:req.body.user}, req.body.pass, function(err, result){
		if (err){
			console.log('user was not registered');
			
		} else {
			console.log(result)
			
		}	
 })	
	
})



app.route('/Data')
.get(function(req,res,next){
	res.json({
		red:1000,
		blue:2000
})
})
	
	


app.listen(3000, function (req, res){
	
	console.log('listening sir!');
})
