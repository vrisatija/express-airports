const express = require('express');
const { airportHandler } = require('../handlers/airport.handler');

const router = express.Router();

router.get('/', airportHandler);

module.exports = {
  airportRouter: router,
};
