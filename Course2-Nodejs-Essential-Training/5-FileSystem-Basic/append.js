
/* 
Appending files : Example 1
*/
const fs = require("fs");
//Loading JSON file using require statement
const colorData = require("./assets/colors.json");

colorData.colorList.forEach(c => {
   //Appending color to node file
   fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, err => {
      if (err) {
         throw err;
      }
   });
});
