// - The following API routes should be created:
// fs is a Node standard library package for reading and writing files
const fs = require("fs");
const path = require("path");

module.exports = function (app) {
  // Return the contents of 'db/db.json' as a string in the variable "data"
  // "utf8" encodes the raw buffer data in human-readable format
  fs.readFile("db/db.json", "utf8", (err, data) =>{ 
      if (err) throw err;

    var notes = JSON.parse(data);
    
//   - GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
  app.get("/api/tables", function (req, res) {
    return res.json(tableData);
  }),
    app.get("/api/waitingList", function (req, res) {
      return res.json(waitingList);
    }),
    //Reservation List, we want to add someone to the reservation object
    app.post("/api/tables", function (req, res) {
      var data = req.body;
      console.log(data);
      if (tableData.length < 5) {
        tableData.push(data);
        res.json("success");
      } else {
        waitingList.push(data);
        res.json("tough luck");
      }
    });
};


//   - POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//   - DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
