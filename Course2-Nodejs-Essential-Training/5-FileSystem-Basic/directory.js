/*
Creating Directory Exam[ple 1:
   This will log out an error if you try to create a directory that is already existing.
*/
// const fs = require("fs");

// fs.mkdir("storage-files", err => {
//    if (err) {
//       throw err;
//    }

//    console.log("directory created");
// });


/*
Creating Directory Exam[ple 2:
   This will display directory already exist if there is a directory name that same directory you intend to create
*/
const fs = require("fs");

if (fs.existsSync("storage-files")) {
   console.log("Directory already exist there");
} else {
   fs.mkdir("storage-files", err => {
      if (err) {
         throw err;
      }

      console.log("Directory created");
   });
}
