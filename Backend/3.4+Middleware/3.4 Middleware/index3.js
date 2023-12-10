import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next)
{
  console.log("Request method: "+req.method);
  console.log("Request url: "+req.url);
  next(); //continue to the next thing
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/home", (req, res) => {
  res.send("<h1> Home </h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
