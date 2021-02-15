const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "Where are you from? ",
    "What is your age? ",
    "What do you do for living? ",
    "Are you happy with that? "
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => {
    console.log(`question anwsered: ${answer}`);
});

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
});

/* We can have multiple Event handlers to the same event. */
answerEvents.on("complete", () => process.exit());