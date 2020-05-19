/*
Example 1: Synchronous codes for readFile
Since it is a text file we want to read we need to read it as UTF-8
*/
// const fs = require("fs");
// const text = fs.readFileSync("./assets/Readme.md", "UTF-8"); 

// console.log(text);

/*
Example 2: Asynchronous codes for readFile
Since it is a text file we want to read we need to read it as UTF-8
*/
// const fs = require("fs");
// fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
//    console.log("File content read");
//    console.log(text);
// }); 

/*
Example 3: Reading Binary files 
The biggest difference in reading binary file is that we do not supply the encoding argument.
*/
const fs = require("fs");
fs.readFile("./assets/jnirano.png", (err, img) => {
   if (err) {
    console.log(`An error has occurred: ${err.message}`);
      process.exit();
    }
   console.log("File content read");
   console.log(img);
}); 

