const express = require('express');

const speakersRoute = require('./speakers.js');
const feedbackRoute = require('./feedback.js');

const router = express.Router();

module.exports = (params) => {
  const { speakersDataRepository } = params;

  router.get('/', (request, response) => {
    const topSpeakers = speakersDataRepository.getList();
    response.render('layout', { pageTitle: 'Welcome', template: 'index', topSpeakers });
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};
