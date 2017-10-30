'use strict';

const clientParser    = require('../models/client-data-parser');
const serverParser    = require('../models/server-data-parser');
const getAppModel     = require('../models/db/get-application');
const createAppModel  = require('../models/db/create-application');

function createApplication(req, res) {
  let parsedData = clientParser.parse(req.body.application);
  createAppModel(parsedData)
  .then(function(data) {
    res.send(data);
  });
}

function getApplication(req, res) {
  getAppModel(req.params.id)
  .then(function(data) {
    console.log(data);
    let parsedData = serverParser.parse(data);
    res.send(parsedData);
  });
}

module.exports.createApplication  = createApplication;
module.exports.getApplication     = getApplication;