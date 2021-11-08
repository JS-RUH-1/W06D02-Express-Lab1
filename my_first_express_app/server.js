const express = require("express");
const app = express();

const person = require("./public/person.json");

// Display Welcome
app.get("/", (req, res) => {
  res.send("Welcome  " + person.name);
});

// Display about.html
app.get("/about", (req, res) => {
  res.sendFile("/public/about.html", { root: __dirname });
});
// Display contact_us.html
app.get("/contact", (req, res) => {
  res.sendFile("/public/contact_us.html", { root: __dirname });
});

// unknown path message
app.use(function (req, res, next) {
  res
    .status(404)
    .send("Sorry can't find that resource. Please check your URL!");
});

app.listen(3000);
