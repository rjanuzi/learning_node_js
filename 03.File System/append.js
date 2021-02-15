const fs = require("fs");

/* In JS we don't need to read JSON files, we
 can just "require" them and use as a data structure. */
const colorData = require("./assets/colors.json");

colorData.colorList.forEach(c => {
    console.log(c.color);
    console.log(c.hex);

    /* Append data a the file (creating if don't exists) */
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});