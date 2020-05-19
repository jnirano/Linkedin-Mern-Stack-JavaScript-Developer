/*
EXAMPLE OF RENAMING & REMOVING FILE USING FS


*/
const fs = require("fs");

//1st: This rename ./assets/colors.json to ./assets/colorData.json
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

//2nd: Moving the myNotes.md into storage files folder
fs.rename("./assets/myNotes.md", "./storage-files/myNote.md", err => {
   if (err) {
      throw err;
   }
});

//3rd: We're going to wait four seconds and delete jnirano with an "x".png. 
setTimeout( () => {
   fs.unlinkSync("./assets/jnirano.png");
}, 4000);