'use strict';

const sendZip = (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'application/javascript');
  res.sendFile(req.url, {
    headers: {
      'Content-Encoding': 'gzip',
      'Content-Type': 'application/javascript'
    }
  }, (err) => {
    if (err) {
      console.log(err);
      next(err);
    }
    else {
      console.log('file sent: ' + req.url);
    }
  });
};

module.exports = sendZip;