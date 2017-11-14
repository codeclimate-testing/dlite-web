'use strict';

const uuidv1          = require('uuid/v1');
const clientParser    = require('../models/client-data-parser');
const serverParser    = require('../models/server-data-parser');
const getApp          = require('../models/db/get-application');
const createApp       = require('../models/db/create-application');

function createApplication(req, res) {
  var data = req.body;
  if(!data.id) { //new application
    data.id = uuidv1();
  }
  let parsedData = clientParser(data);
  createApp(parsedData)
  .then(function(data) {
    let _parsedData = serverParser(data);
    res.send(_parsedData);
  }).catch(function(err) {
    res.status(err.statusCode || 500).json(err);
  });
}

function getApplication(req, res) {
  getApp(req.params.id)
  .then(function(data) {
    let parsedData = serverParser(data);
    res.send(parsedData);
  }).catch(function(err) {
    res.status(err.statusCode || 500).json(err);
  });
}

module.exports.createApplication  = createApplication;
module.exports.getApplication     = getApplication;