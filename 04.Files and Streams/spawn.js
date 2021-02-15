/* In opposite to the "exec" function, the spawn function can handle long
running programs, starting them and interacting with it. */

const cp = require("child_process");

/* We need to pass an array of params */
const questionsApp = cp.spawn("node", ["questions.js"]);

// questionsApp.stdout.on("data", data => {
//     console.log(`${data}`);
// });

questionsApp.stdout.on("close", () => {
    console.log("Program questions.js ended.");
});

// questionsApp.stdin.write("Rafael");
// questionsApp.stdin.write("Sleep");
// questionsApp.stdin.write("Python");

/* Connecting the spawn stdin (terminal) to the questions app stdin
 and the question app stdout to the terminal stdout*/
questionsApp.stdout.pipe(process.stdout);
process.stdin.pipe(questionsApp.stdin);



