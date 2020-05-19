/*
NOTE Event Emitter is Asynchronous
Example 1 
*/
// const events = require("events");
// const emitter = new events.EventEmitter();
// //Handling the customs events
// emitter.on("customEvent", (message, user) => {
//    console.log(`${user}: ${message}`);
// });

// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "Oh that is pretty cool!!", "Joel");

/*
Example 2:-
*/
const events = require("events");
const emitter = new events.EventEmitter();
//Handling the customs events
emitter.on("customEvent", (message, user) => {
   console.log(`${user}: ${message}`);
});

process.stdin.on("data", data => {
   const input = data.toString().trim();
   if (input === "exit") {
      emitter.emit("customEvent", "Goodbye!", "process");
      process.exit();
   }
   emitter.emit("customEvent", input, "terminal");
});