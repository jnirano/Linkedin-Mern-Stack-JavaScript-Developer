/*
Require function is used to load modules.
NB:- Core Modules are modules that are installed locally with the installation of Nodejs. e.g path module, v8 module, utility modules etc.

Example 1:
*/
// const path = require("path");

// const dirUploads = path.join(__dirname, 'www', 'files', 'uploads' );

// console.log(dirUploads);


/*
Example 2:
The primary difference between utility log and the console log is that we have to require the utility log.
*/
// const path = require("path");
// const util = require("util");

// util.log(path.basename(__filename));

// util.log(" ^ The name of the current file");


/*
Example 3:
*/
const path = require("path");
const util = require("util");
const v8 = require("v8");

util.log(v8.getHeapStatistics());


/*
Example 4: Destructuring the Module
The codes below produced the same result as example 3 above.
*/
const path = require("path");
const util = require("util");
const {getHeapStatistics} = require("v8");

log(getHeapStatistics());


