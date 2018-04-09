'use strict';

const fetchApplication  = require('../models/db/get-application');
const serverParser      = require('../models/parsers/server-to-client-parser');

module.exports = function getApplication(req, res) {
  fetchApplication.byId(req.params.id)
    .then(function(data) {
      let parsedData = serverParser(data);
      res.status(200).send(parsedData);
    }).catch(function(err) {
      console.error(err);
      res.status(err.statusCode || 500).json(err);
    });
};
