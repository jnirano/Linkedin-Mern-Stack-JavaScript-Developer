const readline = require("readline");

//To work with readline we must create an interface. the variable rl below is used as our readline interface
const rl = readline.createInterface({
   //This Object below allow us to ask question and collect input from the terminal
   input: process.stdin,
   output: process.stdout
});

rl.question("How do you like Node? ", answer => {
   console.log(`Your answer: ${answer}`);
})