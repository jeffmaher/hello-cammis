'use strict';

const config = require('./config');
const express = require('express');
const app = express();
const middleware = require('./lib/middleware');
const routes = require('./lib/routes');

app.locals.config = config;

app.use(middleware.logger);

app.use('/api', routes);

app.use((req,res) => {
  res.status(404).send('Resource Not Found');
});

app.listen(config.port, () => console.log(`Hello CAMMIS listening on port ${config.port}!`));
