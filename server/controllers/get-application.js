'use strict';

const fetchApplication  = require('../models/db/get-application');
const serverParser      = require('../models/parsers/server-to-client-parser');

module.exports = function getApplication(req, res) {
  fetchApplication(req.params.id)
    .then(function(data) {
      if(data.error) {
        res.status(error.statusCode || 500).json(error);
      }
      else{
        let parsedData = serverParser(data);
        res.send(parsedData);
      }
    }).catch(function(err) {
      console.error(err);
      res.status(err.statusCode || 500).json(err);
    });
};
