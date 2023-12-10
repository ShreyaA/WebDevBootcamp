import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try
    {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        console.log(result.status);
        console.log(result.data);
        res.render("index.ejs", result.data);
    }
    catch(error){
        console.log(error.response.data);
        res.render("index.ejs", {secret: "There's something wrong with our server!", username: "Sorry!"});
    }
  });
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });