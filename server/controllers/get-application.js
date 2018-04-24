'use strict';

const fetchApplication  = require('../models/db/get-application');
const serverParser      = require('../models/parsers/server-to-client-parser');

module.exports = function getApplication(req, res) {
  fetchApplication.byId(req.params.id)
    .then(function(data) {
      let parsedData = serverParser(data);

      if (parsedData.hasOwnProperty('application') && !parsedData.application.id) {
        parsedData.application.id = req.params.id;
      }

      else if (parsedData.hasOwnProperty('cdl') && !parsedData.cdl.id) {
        parsedData.cdl.id = req.params.id;
      }

      res.status(200).send(parsedData);
    }).catch(function(err) {
      console.log(err);
      res.status(err.statusCode || 500).json(err);
    });
};
