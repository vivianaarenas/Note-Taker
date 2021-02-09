// Require/import the HTTP module
//const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3031;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//path to the files with the get routes to the notes api
require("./routes/api")(app);
//path to the files with index.html & notes.html
require("./routes/html")(app);

//Starting the server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
