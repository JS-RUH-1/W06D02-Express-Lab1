const express = require('express');
const app = express();
let person = require ('./public/person.json');
const port = 3000;


app.listen(port,()=>{console.log("server is running")})

//Display from the file person.json
app.get('/',(req,res)=>{
    res.send(`Welcome ${person.name}`);
});


// Display the HTML page, about.html
app.get ('/about',(req,res)=>{
    res.sendFile('./public/about.html',{root: __dirname});
});

// Display the HTML page, contactUs.html
app.get ('/contactus',(req,res)=>{
    res.sendFile('./public/countactus.html',{root: __dirname});
});


