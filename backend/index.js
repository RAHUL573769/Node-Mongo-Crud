const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");

const port = 5000;

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, (req, res) => {
  console.log(`Server Running at ${port}`);
});
