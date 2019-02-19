'use strict';

const check_solo = require('./check_solo');
const PORT = process.env.PORT || 3000;
const HELLO_CAMMIS_DATA_HOST = process.env.HELLO_CAMMIS_DATA_HOST || false;
const HELLO_CAMMIS_DATA_PORT = process.env.HELLO_CAMMIS_DATA_PORT || 8000;
const HELLO_CAMMIS_DATA_URL = `http://${HELLO_CAMMIS_DATA_HOST}:${HELLO_CAMMIS_DATA_PORT}`;
const SOLO_MODE = check_solo(HELLO_CAMMIS_DATA_HOST);

module.exports = {
  port: PORT,
  soloMode: SOLO_MODE,
  helloCammisDataUrl: HELLO_CAMMIS_DATA_URL,
  staticPath: 'static'
};
