var express = require('express')
var app = express()
app.set("view engine", "ejs");

app.get('/', function(req, res){
  res.render('home')
})

app.get('/friends', function(req, res){
  var friends = ["Sarah", "Nicki", "Eric", "Lily", "Samwise", "Miranda"]
  res.render("friends", {friends: friends})
})

app.post('/addfriend', function(req,res){
  console.log(req.body)
  res.send("Post Route")
})

app.listen(3000)