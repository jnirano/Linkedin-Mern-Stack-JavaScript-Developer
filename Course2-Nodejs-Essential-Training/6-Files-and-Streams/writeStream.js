/* Example 1:
NB: The process.stdout object is a writeable stream.

NB:- Inside the assets folder myFile.txt will be created and hello world is written inside myFile.txt using writeStream.write()
*/
// const fs = require("fs");

// const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

// writeStream.write("hello");
// writeStream.write(" world\n");

/*Example 2- Using process.stdout

*/
// const fs = require("fs");

// const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

// process.stdin.on("data", data => {
//    writeStream.write(data);
// });

/*Example 3- Using readStream

*/
// const fs = require("fs");

// const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
// const readStream = fs.createWriteStream("./assets/lorum-ipsum.md", "UTF-8");

// readStream.on("data", data => {
//    writeStream.write(data);
// });

/*Example 4- Using readStream & pipe

*/
// const fs = require("fs");

// const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
// const readStream = fs.createWriteStream("./assets/lorum-ipsum.md", "UTF-8");

// process.stdin.pipe(writeStream);

/*Example 5- Using readStream & pipe

*/
const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

readStream.pipe(writeStream);


