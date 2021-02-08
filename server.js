// Require/import the HTTP module
const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8087;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
require("./routes/api")(app);
require("./routes/html")(app);

//Starting the server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
