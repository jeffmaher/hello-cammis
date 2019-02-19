'use strict';

const express = require('express');
const router = express.Router();
const hello = require('./hello');

router.get('/:name', (req,res) => {
  if(req.app.locals.config.soloMode) {
    hello.helloSolo(req.params.name, greeting => {
      // Success
      res.send({"message:": greeting});
      res.status(200);
    }, () => {
      // Failure
      res.send("Error processing request");
      res.status(500);
    });
  } else {
    hello.helloApi(req.params.name, req.app.locals.config, greeting => {
      // Success
      res.send({"message:": greeting});
      res.status(200);
    }, () => {
      // Failure
      res.send("Error processing request");
      res.status(500);
    });
  }
});

module.exports = router;
