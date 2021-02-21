const { response } = require('express');
const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const FeedbackDataRepository = require('./services/FeedbackDataRepository');
const SpeakersDataRepository = require('./services/SpeakersDataRepository');

const feedbackDataRepository = new FeedbackDataRepository('./data/feedback.json');
const speakersDataRepository = new SpeakersDataRepository('./data/speakers.json');

const routes = require('./routes');

const app = express();
const port = 3000; /* Convention to Express servers */

/* Adding cookie-session to the middleware and also setting the 
application to trust in the proxy to ensure that all will work fine in
the final server. */
app.set('trust proxy', 1);
app.use(
  cookieSession({
    name: 'session',
    keys: ['Jaindijá1239an', 'jdoapn1nj40Ja90'],
  })
);

/* Setting up the template engine (EJS) */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

/* Adding a middleware to provide the static data used by the pages */
app.use(express.static(path.join(__dirname, './static')));

/* Sample of how to intiate a global variable for the whole app */
app.locals.siteName = 'RAIONA';

/* Sample of how set a global variable to templates */
app.use((request, response, next) => {
  response.locals.someGlobalVariable = 'Hello!';

  try {
    const names = speakersDataRepository.getNames();
    response.locals.speakersNames = names;
  } catch (err) {
    return next(err);
  }

  return next(); /* To don't block the middleware processing */
});

/* Adding a middleware to use the routes defined in routes/index.js */
app.use(
  '/',
  routes({
    feedbackDataRepository,
    speakersDataRepository,
  })
);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
