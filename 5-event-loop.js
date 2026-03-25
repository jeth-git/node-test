// js is a single threaded language(has one call stack and can only execute one piece of code at a time.)
// Despite the fact that js is single-threaded, Node.js or the Browsers are not 

// EVENT LOOP can be refered to as a technique used by Node.js to manage multiple tasks at a time

// In node.js, this technique makes use of the libuv library(the code). It does the looping timing, and shifting of tasks

// when you run a js program and then it reaches an async command, it will send it to libuv which will assign it to one of its worker thread(it usually has 4 by default). After completion of the execution of the async command, libuv places it to the Event loop's queue. The Event loop pushes the result to the js code once the main thread is empty

// The async await function puts its command into a special queue called the microtask queue, the event loop will then check if the awaited task is done, and then will put it back to the main thread

// Node js is a type of multitasking called Concurrency. Concurrency means managing many tasks by switching to each of them rapidly that it gives an illusion that they are managed at the exact same time. In the contrary, we have parrallelism which is when multiple tasks are being managed by multiple processors


// The advangtage of concurrency(fake) multitasking is that it does the multitasking work without necessarily adding a manager(memory, cpu) for each of the tasks

// take note: The browser has it's own "libuv" which are Web APIs
const fs = require('fs')

console.log("1. Checking Database..."); // V8 runs this

// V8 hands this to libuv and continues
fs.readFile('wholesalers.json', (err, data) => {
    console.log("4. Data is here!"); // This is a Macrotask
});

// V8 runs this immediately
Promise.resolve().then(() => console.log("3. Priority Check Done")); // This is a Microtask

console.log("2. Request Sent."); // V8 runs this