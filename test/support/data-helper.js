'use strict';
const IDDLData        = require('./fake-data/fake-iddl-data');
const fakeUserData    = require('./fake-data/fake-user-data');
const CDLData         = require('./fake-data/fake-cdl-data');
const parse           = require('../../server/models/parsers/client-to-server-parser');


function fakeRecords() {
  let clientData = IDDLData.fakeClientData();
  return parse(clientData);
};

function fakeCDLRecords(incomingData) {
  return parse(incomingData);
};

module.exports = {
  IDDLData,
  CDLData,
  fakeRecords,
  fakeUserData,
  fakeCDLRecords
};
