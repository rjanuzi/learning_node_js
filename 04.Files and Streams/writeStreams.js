const fs = require("fs");

/* Standard output (terminal) is a writeble stream */
process.stdout.write("hello");
process.stdout.write(" world\n");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

/* Simply sending data to the stream */
writeStream.write("hello");
writeStream.write(" world\n");

/* From terminal to file */
// process.stdin.on("data", data => {
//     writeStream.write(data);
// });

/* From file to file */
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");
readStream.on("data", data => {
    writeStream.write(data);
});

/* The readStreams and writeStream are created to work each other,
 so we have a lot of functions to do this. The pipe function "connects"
 one readStream to one writeStream. */
process.stdin.pipe(writeStream);