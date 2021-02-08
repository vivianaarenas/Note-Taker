var path = require("path");

module.exports = function (app) {
  //Take the express app, which gives us the GET method
  //GET gives us 2 parameters, 1st app/url we're going to hit, and the 2nd is a fx that gets a request/response aka the logic to
  //give the front-end the proper html file
  //__dirname represents the absolute path, built in the "GET" for the absolute pathte path
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};
