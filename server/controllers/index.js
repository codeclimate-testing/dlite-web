'use strict';

const uuidv1            = require('uuid/v1');
const clientParser      = require('../db/parsers/client-to-server-parser');
const serverParser      = require('../db/parsers/server-to-client-parser');
const fetchApplication  = require('../db/models/get-application');
const post              = require('../db/models/post-application');

function getApplication(req, res) {
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
}

function postApplication(req, res) {
  var data = req.body;

  if(!data.id) { //new application
    data.id = uuidv1();
  }

  let parsedData = clientParser(data);
  post.saveApplication(parsedData)
    .then(function(data) {
      if(data.error) {
        res.status(error.statusCode || 500).json(error);
      }
      else{
        res.status(200).send({ application_id: data.application[0].id });
      }
    })
    .catch(function(err) {
      console.error(err);
      res.status(err.statusCode || 500).json(err);
  });

}

module.exports.getApplication   = getApplication;
module.exports.postApplication  = postApplication;