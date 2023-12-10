import express from "express";
//import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;
const correctPassword = "ILoveProgramming";

app.use(express.urlencoded({ extended: true }));

const d = new Date();

app.get("/", (req, res) => 
{
    var weekDay = (d.getDay() == 0 || d.getDay() == 6) ? false : true;
    let adv = "It's time to work hard!";
    let type_ = "a weekday!";
    if(!weekDay)
    {
        adv = "It's time to relax!";
        type_ = "the weekend!"
    }
    res.render(__dirname + "/views/index.ejs",
    {weekDay : weekDay, 
        advice: adv, 
        type: type_});
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });