/*
Author: Anthony DeMattos
Description: Server that will take in a comment and base64 image, verify they are there,
             and return response 200 if the are present and 400 if not. It will also send 
             a POST request of the image to fictious url
Date: July 9, 2021

How to run: 
  - npm install
  - node index.js
*/

const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50MB" }));

// Endpoint recieves image and comment
// Will write image to out.png file to verify getting image correctly
// Send post request to fictious url
// Send response 200 if image and comment are present, 400 if not
app.post("/", (req, res) => {
  if (req.body.comment !== "" && typeof req.body.imgsource !== "undefined") {
    //verify getting image correctly
    fs.writeFile("./out.png", req.body.imgsource, "base64", (err) => {
      if (err) throw err;
    });

    // post image to ficticous url
    fetch("https://imagehasbeenverified.example.endpoint", {
      method: "POST",
      body: req.body.imgsource,
    }).catch((e) => console.log(`Error posting image to url: ${e}`));

    res.status(200).send({ message: "Success" });
  } else {
    res.status(400).send({ message: "Failure" });
  }
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
