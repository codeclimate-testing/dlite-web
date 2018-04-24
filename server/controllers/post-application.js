'use strict';

const uuidv4            = require('uuid/v4');
const clientParser      = require('../models/parsers/client-to-server-parser');
const post              = require('../models/db/post-application');

module.exports = function postApplication(req, res) {
  var data = req.body;
  if(!data.id) { //new application
    data.id = uuidv4();
  }

  let ipAddress = req.headers['X-Forwarded-For'] || req.ip;
  let parsedData = clientParser(data, ipAddress);
  post.saveApplication(parsedData)
    .then(function(data) {
      if(data.error) {
        res.status(data.error.statusCode || 500).json(data.error);
      }
      else{
        res.status(200).send({ application_id: data.application[0].id });
      }
    })
    .catch(function(err) {
      console.log(err);
      res.status(err.statusCode || 500).json(err);
    });
};

