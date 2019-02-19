'use strict';

module.exports = (req, res, next) => {
  let startDateTime = new Date();
  res.on('finish', function() {
      let endDateTime = new Date();
      console.info({
        data: {
          duration: `${endDateTime - startDateTime} ms`,
          req: {
              method: req.method,
              originalUrl: req.url,
              ip: req.ip,
              apiVersion: req.apiVersion,
              dateTime: startDateTime
            },
          res: {
              dateTime: endDateTime,
              statusCode: res.statusCode
            }
        }
      });
  });
  next();
};
