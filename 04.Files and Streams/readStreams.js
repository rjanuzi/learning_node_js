const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

let fileTxt = "";

/* Reading a file "chunk-by-chunk". This makes a better use of memory,
 once we don't need to read the complete file before of receive some
 data. */
readStream.on("data", data => {
    console.log(`Input with len of ${data.length - 2}`);
    fileTxt += data;
});

/* First part of data */
readStream.once("data", data => {
    console.log(data);
})

readStream.on("end", () => {
    console.log("Stream reading completed");
    console.log(`In total I readed ${fileTxt.length - 1} characters (bytes)`);
});