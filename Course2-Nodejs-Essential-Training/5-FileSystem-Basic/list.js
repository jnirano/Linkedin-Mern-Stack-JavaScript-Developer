/*
The fs module can be used to list files in directories, read content of a file, create new files in directories, stream files, watch files, modify file permissions etc.
*/

/*
EXAMPLE 1: The function is executing Synchronously that means const files = fs.readdirSync("./assets"); is blocking
*/
// const fs = require("fs");
// const files = fs.readdirSync("./assets");

// console.log(files);

/*
Example 2:-
*/
// const fs = require("fs");

// console.log("Started reading files");
// const files = fs.readdirSync("./assets");
// console.log("Completed");

// console.log(files);

/*
Example 3:- Listing files in a directory by using Asynchronous codes using readdir
*/
const fs = require("fs");

fs.readdir("./assets", (err, files) => {
   if (err) {
      throw err;
   }
   console.log("complete");
   console.log(files);
});

console.log("started reading files");

