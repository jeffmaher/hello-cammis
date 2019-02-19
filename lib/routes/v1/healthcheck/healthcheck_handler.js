'use strict';

const express = require('express');
const router = express.Router();
const healthcheck = require('./healthcheck');

router.get('/', (req, res, next) => {
  res.send(healthcheck());
  res.status(200);
});

module.exports = router;
