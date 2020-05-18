/* 
Example 1:
Working with Nodejs Asynchronously by Using SetTimeOut function
*/
// const waitTime = 3000;
// console.log(`setting a ${waitTime / 1000} second delay`);

// const timerFinished = () => console.log("Done!!");

// setTimeout(timerFinished, waitTime);


/* 
Example 2
 Working with Nodejs Asynchronously by Using Set Interval function
 */
// const waitTime = 3000;
// const waitInterval = 500;
// let currentTime = 0;

// const incTime = () => {
//    currentTime += waitInterval;
//    console.log(`Waiting ${currentTime/1000} seconds`);   
// };

// console.log(`setting a ${waitTime / 1000} second delay`);

// const timerFinished = () => {
//    clearInterval(interval);
//    console.log("Done!!");
// };

// const interval = setInterval(incTime, waitInterval);
// setTimeout(timerFinished, waitTime);


/*
Example 3:
Report Progress with set time out
*/
const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
   currentTime += waitInterval;
   const p = Math.floor((currentTime / waitTime) * 100);
   process.stdout.clearLine();
   process.stdout.cursorTo(0);
   process.stdout.write(`waiting ... ${p}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
   clearInterval(interval);
   process.stdout.clearLine();
   process.stdout.cursorTo(0);
   console.log("done");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
