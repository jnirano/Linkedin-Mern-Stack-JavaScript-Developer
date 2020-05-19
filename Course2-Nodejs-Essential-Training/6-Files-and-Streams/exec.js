/*
Execute (exec) is design to run a synchronous process
*/
const cp = require("child_process");

// cp.exec("open http://www.linkedin.com/learning");
cp.exec("open -a Terminal .");


// const cp = require("child_process");

// cp.exec("node readStream", (err, data, stderr) => {
//    console.log(data);
// });
