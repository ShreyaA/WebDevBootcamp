import express from "express";
import bodyParser from "body-parser";

import { render } from "ejs";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

var notes={};
let id = 1;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/addNote", (req, res) => {
    let note = {title: req.body["title"], content: req.body["content"]};
    notes[id] = note;
    id += 1;
    let data = {
        notes: notes
    };
    res.render("index.ejs", data);
});

app.post("/editNote", (req, res) => {
    console.log("Inside editNote");
    console.log(req.body);
    let curnoteid = req.body["noteid"];
    notes[curnoteid] = {title: req.body.title, content: req.body.content};
    let data = {
        notes: notes
    };
    res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
