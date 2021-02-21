const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { feedbackDataRepository } = params;

  router.get('/', (request, response) => {
    const feedbacks = feedbackDataRepository.getList();
    return response.json(feedbacks);
  });

  router.post('/', (request, response) => {
    response.send('Feedback form posted');
  });

  return router;
};
