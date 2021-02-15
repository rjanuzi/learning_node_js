const cp = require("child_process");

/* Any "Terminal" command from the SO.
 Every program that "Run, end and maybe return data." */
// cp.exec("start http://www.linkedin.com/learning");

// cp.exec("ls", (err, data) => {
//     if (err) {
//         throw err;
//     }

//     console.log(data);
// });

/* To get just the error */
// cp.exec("lsaaa", (err, data, stderr) => {
//     console.log(stderr);
// });

/* We can also execute the node itself and get the data */
cp.exec("node readStreams", (err, data, stderr) => {
    console.log(data);
});
