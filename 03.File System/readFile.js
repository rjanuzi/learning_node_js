const fs = require("fs");

/* Synchronous reading */
const text = fs.readFileSync("./assets/Readme.md", "UTF-8");
console.log(text);

/* Asynchronous reading */
fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {

    if(err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }

    console.log("file contents read");
    console.log(text);
});

/* Reading binary files (no encodning)*/
fs.readFile("./assets/alex.jpg", (err, img) => {

    if(err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }

    console.log("file contents read");
    console.log(img);
});