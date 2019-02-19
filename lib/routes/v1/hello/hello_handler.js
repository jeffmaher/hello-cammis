'use strict';

const express = require('express');
const router = express.Router();
const hello = require('./hello');

router.get('/:name', (req,res) => {
    hello.helloSolo(req.params.name, greeting => {
      res.send({"message:": greeting});
      res.status(200);
    }, () => {
      res.send("Error processing request");
      res.status(500);
    });
});

module.exports = router;
