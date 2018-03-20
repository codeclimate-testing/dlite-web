'use strict';

const defaultClientState    = require('./client-default-state');
const cardTypeParser        = require('./card-type');
const CDLObject             = require('./server-to-client-parsers/cdl');
const IDDLObject            = require('./server-to-client-parsers/iddl');

function parse(data) {

  if (cardTypeParser.isCDLDatabase(data)){
    if (!data) {
      return defaultClientState.CDL;
    }
    return CDLObject(data);
  }
  else {
    if(!data) {
      return defaultClientState.IDDL;
    }
    return IDDLObject(data);
  }
}

module.exports = parse;