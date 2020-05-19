/*Example 1: Exporting JS module that is not core module or installed module using npm.
*/
// const name = require("./myModule");
// console.log(name);

/*
Example 2:-
*/
// const counter = require("./myModule");
// counter.inc();
// counter.inc();
// counter.inc();

// console.log(counter.getCount());

///Using Destructuring for the example 2 codes above
const { inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();
dec();

console.log(getCount());