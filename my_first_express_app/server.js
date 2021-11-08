const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
  fs.readFile("./public/person.json", "utf-8", (er, data) => {
    let obj = JSON.parse(data);
    res.send("Welcome " + obj.name);
  });
});
app.get("/about.html", function (req, res) {
  fs.readFile("./public/about.html", (err, data) => {
    if (err) console.log(err);
    res.write(data);
    return res.end();
  });
});
app.get("/contact_us.html", function (req, res) {
  fs.readFile("./public/contact_us.html", (err, data) => {
    if (err) console.log(err);
    res.write(data);
    return res.end();
  });
});
app.get("/*", function (req, res) {
  fs.readFile("./contact_us.html", (err, data) => {
    res.send("Sorry! Can’t find that resource. Please check your URL");
  });
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
