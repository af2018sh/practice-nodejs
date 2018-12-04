const express = require("express");
const hbs = require("hbs");
const fs = require("hbs");

var app = express();
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

hbs.registerHelper("getFullYear", () => {
  return new Date().getFullYear();
});
app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    welcomeMessage: "Welcome Dear User"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.listen("3000", () => {
  console.log("Server is up to port 3000");
});
