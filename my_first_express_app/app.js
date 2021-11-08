const express = require('express')
const app = express()
let person = require ('./public/person.json');
const path = require('path');

app.get('/',function(req,res){
    res.send(`Welcome ${person.name}`);
});

app.get('/about',function(req,res){
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact',function(req,res){
    res.sendFile(__dirname + '/public/about.html');
});

app.use(function (req, res, next) {
    //Capture All 404 errors
      res.status(404).send(`Sorry ${person.name}! Can’t find that resource. Please check your URL`)
    })


app.use('/', express.static('public'))
app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:8080`)
})
