'use strict';

module.exports = (hello_cammis_data_url) => {
  if(!hello_cammis_data_url || hello_cammis_data_url == ""){
    console.warn('[WARNING] Solo Mode, missing HELLO_CAMMIS_DATA_URL parameter');
    return true;
  } else {
    return false;
  }
};
