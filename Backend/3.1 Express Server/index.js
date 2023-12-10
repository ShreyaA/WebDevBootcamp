import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req.rawHeaders);
  res.send('<h3> Hello World! </h3>');
});

app.get('/about', (req, res) =>
{
    res.send('<h3> I am shreyaa. Your friendly, neighborhood human. </h3>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});