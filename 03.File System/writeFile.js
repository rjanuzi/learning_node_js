const js = require("fs");

const md = `
# This is a new file

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

/* Write synchronosly */
js.writeFileSync("./assets/notes_sync.md", md.trim());

/* Write asynchrounosly */
js.writeFile("./assets/notes_async.md", md.trim(), err => {
    if(err) {
        throw err;
    }

    console.log("File saved");
});