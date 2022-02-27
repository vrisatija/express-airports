const express = require('express');
const env = require('dotenv');

const { airportRouter } = require('./routes/airport.routes');

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use('/airport-details', airportRouter);

app.listen(port, () => {
  console.log(`Server listenting at http://localhost:${port}/airport-details/`);
});
