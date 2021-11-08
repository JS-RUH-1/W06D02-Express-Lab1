const express =require('express')
const person  = require("./public/person.json")
const path = require("path")
const app = express()

app.get('/',(req,res)=>{
    app.re
    res.send(`Welcome ${person.name}`);
});

app.get('/about',(req,res)=>{
    console.log(" i am about")
    res.sendFile(path.resolve('./public/about.html'));
});

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve('/public/contactUs.html'));
});


app.use( (req, res)=> {
      res.status(404).send(`Sorry! Can’t find that resource. Please check your URL`)
    })


app.listen(3000)