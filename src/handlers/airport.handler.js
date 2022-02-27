const url = require('url');
const airportService = require('../services/airport.services');

const airportHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const airportCode = url.parse(req.url, true).query['airport-code'];
  const airportDetails = airportService.getInfo(airportCode);
  res.json(airportDetails).status(200);
};

module.exports = {
  airportHandler,
};
