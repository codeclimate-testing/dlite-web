'use strict';

const uuidv1            = require('uuid/v1');
const clientParser      = require('../models/parsers/client-to-server-parser');
const post              = require('../models/db/post-application');

module.exports = function postApplication(req, res) {
  var data = req.body;
  if(!data.id) { //new application
    data.id = uuidv1();
  }

  let parsedData = clientParser(data);
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
      console.error(err);
      res.status(err.statusCode || 500).json(err);
    });
};

