/*
Rename and Remove Directories
Example 1- Rename Directory
*/
// const fs = require("fs");
// //This will rename storage-files folder to storage folder
// fs.renameSync("./storage-files", "./storage");


/*
Example 2:- Remove Directory
NB: So before we can remove a directory with fs.rmdir, we need to make sure that all the files within that directory have been moved or removed. In this case, we read all of the files within the storage directory, and we used the unlinkSync function to remove them all before deleting that directory.
readdir.Sync function will give us an array of every file name within the directory.
*/
const fs = require("fs");

fs.readdirSync("./storage").forEach(fileName => {
   fs.unlinkSync(`./storage/${fileName}`);
});

//This will remove storage-files folder to storage folder
fs.rmdir("./storage", err => {
   if (err) {
      throw err;
   }
   console.log("./storage directory removed");
});