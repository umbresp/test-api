const express = require("express");
const app = express();
const dt = require('./time');
const http = require("http");
const url = require("url");

let quotes = ['I am a goldfish', 'Did you ever hear the tragedy of Darth Plagueis the Wise?', 'Hello there', 'Did you know that trinitrotuline is costly?', 'NANI?!?!', 'Jonas said he wanted more quotes. Here\'s one.']

let data = {
 user1 : {
  name : "Jason",
  password : "jasonLol",
  profession : "python",
  id: 1
 },
 user2 : {
  name : "AntonyJoseph",
  password : "creeperslayer1010",
  profession : "Fortnite player",
  id: 2
 },
 user3 : {
  name : "Victini",
  password : "victini_brawlstars",
  profession : "Brawl Stars Player",
  id: 3
 },
 user4 : {
  name : "Free TNT",
  password : "costlyTrinitrotuline",
  profession : "Code Copier",
  id : 4
 },
 user5 : {
  name : "Sleedyak",
  password : "FreeTNTsCreditCardNumber",
  profession : "Discord Nitro User",
  id : 5
 }
}



app.get("/time", function(req, res) {
 let time = {time : dt.myDateTime()}
 res.json(time);
});

app.get("/", function(req, res) {
 res.send("<h1>API endpoints:</h1><ul><li>/api</li><li>/time</li><li>/quote</li><li>/players/:tag</li></ul>Note: You will need to pass a header in the form of Authorization: (password) to access /api. Hint: IRC pw meme");
});


app.get("/api", (req, res) => {
 if(!req.get("Authorization")) res.status(401).send({status: 401, reason:"Unauthorized"});
 let auth = req.get("Authorization");
 if(auth === "hunter2") {
  res.json(data);
 } else {
  res.status(401).send({status: 401, reason: "Invalid token"});
 }
});

app.get("/players/:tag", (req, res) => {

 let tag = req.params.tag;
 if (tag.match('[^0289PYLQGRJCUVpylqgrjcuv]')) {
  res.json({error : 404, message : "Invalid Tag"});
 }
 let info = {tag : req.params.tag.toUpperCase()};
 res.json(info);
});

app.get("/quote", (req, res) => {
 let quote = {quote : quotes[Math.floor(Math.random() * quotes.length)]};
 res.json(quote);
});

const server = app.listen(8080, function () {
 const host = server.address().address;
 const port = server.address().port;
 console.log(`Example app listening to ${host}${port}`);
});

setInterval(() => {
  http.get("http://localhost:portnum");
}, 300000);
