const express = require("express");
const morgan = require("morgan");

const app = express();
const projects = require("./data/projects.json");
const articles = require("./data/articles.json");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/blog.html");
});
app.get("/api/projects", (req, res) => {
  res.json(projects);
});
app.get("/api/articles", (req, res) => {
  res.json(articles);
});
app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(3000, () => console.log("Listening on server 3000!"));
