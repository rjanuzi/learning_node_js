const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json");

/* We can use the rename function to move files */
fs.rename("./assets/notes_async.md", "./storage-files/notes_async.md", err => {
    if (err) {
        throw err;
    }
});

/* Deleting files */
fs.writeFileSync("./assets/file_to_delete.md", "sample data\nsample data 2");
setTimeout(() => {
    fs.unlinkSync("./assets/file_to_delete.md");
}, 10000);

/* Reverting files names and locations */
setTimeout(() => {

    fs.renameSync("./assets/colorData.json", "./assets/colors.json");

    fs.rename("./storage-files/notes_async.md", "./assets/notes_async.md", err => {
        if (err) {
            throw err;
        }
    });

}, 10000);

/* We also can rename and remove directories (we need to empty the directory first) */
/* Creating the directory */
fs.mkdirSync("./temp-folder");

/* Adding some files */
fs.writeFileSync("./temp-folder/file_to_delete_1.md", "sample data\nsample data 2");
fs.writeFileSync("./temp-folder/file_to_delete_2.md", "sample data\nsample data 2");

/* Renaming the directory */
setTimeout(() => {
    fs.renameSync("./temp-folder", "new-temp-folder");
}, 5000);

/* Deleting files and directory */
setTimeout(() => {
    fs.readdirSync("./new-temp-folder").forEach(fileName => fs.unlinkSync(`./new-temp-folder/${fileName}`));

    fs.rmdir("./new-temp-folder", err => {
        if (err) {
            throw err;
        }

        console.log("Directory removed");
    });
}, 10000);