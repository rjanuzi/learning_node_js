const fs = require("fs");


/* Reading directories files synchronously */
// const files = fs.readdirSync("./assets");

/* Reading directories files asynchronously */
fs.readdir("./assets", (err, files) => {
    if(err) {
        throw err;
    }

    console.log("complete")
    console.log(files);
});

/* Sinc we're reading the files asynchronously
 this message can be printed before the readdir
 function is completed. */
console.log("started reading files");