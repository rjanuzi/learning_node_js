const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersDataRepository } = params;

  router.get('/', async (request, response) => {
    const speakers = await speakersDataRepository.getList();
    return response.json(speakers);
  });

  router.get('/:shortname', (request, response) => {
    response.send(`Detail page of ${request.params.shortname}`);
  });

  return router;
};
