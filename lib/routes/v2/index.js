'use strict';

const express = require('express');
const router = express.Router();
const healthcheckHandler = require('./healthcheck');
const helloHandler = require('./hello');

router.use((req, res, next) => {
  req.apiVersion = "v2";
  next();
});

router.use('/healthcheck', healthcheckHandler);
router.use('/hello', helloHandler);

module.exports = router;
