var express = require('express');
var url = require('url'); 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./users/userModel.js');
var Promise = require('bluebird')
Promise.promisifyAll(User);

var app = express();

mongoose.connect('mongodb://localhost/randomDate');
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static(__dirname + '/client'));

app.get('/api/users', function(req, res) {
  User.find({}).then(function(users) {
    res.send(users);
  })
});

app.post('/api/users', function(req, res) { 
  var user = req.body;
  var answers = [user.answer1, user.answer2, user.answer3];
  var newUser = {
    name: user.name,
    answers: answers
  };
  var person = new User(newUser);
  person.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  })
});

app.listen(3000, function() {
  console.log(' i am a requesthandle fn, and I\'m alive');
});