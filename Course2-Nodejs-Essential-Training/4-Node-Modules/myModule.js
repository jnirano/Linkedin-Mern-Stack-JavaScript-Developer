/*Example 1: Exporting JS module that is not core module or installed module using npm.
*/
// module.exports = "Alex";

/*
Example 2:-
*/
let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

module.exports = {
   inc,
   dec,
   getCount
};
