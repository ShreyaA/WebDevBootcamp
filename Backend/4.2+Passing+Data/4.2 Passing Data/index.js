import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let firstName = req.body["fName"];
  let lastName = req.body["lName"];
  let l = firstName.length + lastName.length;
  let data = {nameLength: l, firstName: firstName, lastName: lastName};
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
