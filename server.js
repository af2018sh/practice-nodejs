const express = require("express");
const hbs = require("hbs");
const fs = require("hbs");
const port = process.env.PORT || 3000;

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

app.get("/projects", (req, res) => {
  res.render("projects.hbs", {
    pageTitle: "Project Page"
  });
});

app.listen(port, () => {
  console.log(`Server is up to port ${port}`);
});
