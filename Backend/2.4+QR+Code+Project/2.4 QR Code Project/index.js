/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import { writeFile, createWriteStream } from 'node:fs';
import fs from "fs";
import qr from 'qr-image';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'website',
        message: "Enter the website name: ",
      }
  ])
  .then((answers) => {
    var url = answers.website;
    console.log("You entered: "+url);

    writeFile("website.txt", url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
     
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('myqr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("isTtyError");
    } else {
      console.log("Error inquirer");
    }
  });