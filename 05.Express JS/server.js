const { response } = require('express');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000; /* Convention to Express servers */

/* Setting up the template engine (EJS) */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

/* Adding a middleware to provide the static data used by the pages */
app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
