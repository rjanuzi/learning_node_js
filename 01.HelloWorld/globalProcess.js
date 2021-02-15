console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

const [,, firstParam, secondParam] = process.argv;
console.log(`The first param is ${firstParam} and the second is ${secondParam}`);
