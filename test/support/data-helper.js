'use strict';
const IDDLData        = require('./fake-data/fake-iddl-data');
const fakeUserData    = require('./fake-data/fake-user-data');
const CDLData         = require('./fake-data/fake-cdl-data');
const parse           = require('../../server/models/parsers/client-to-server-parser');


function fakeIDDLRecords() {
  let clientData = IDDLData.fakeClientData();
  return parse(clientData);
};

function fakeRecords(incomingData) {
  return parse(incomingData);
};

module.exports = {
  IDDLData,
  CDLData,
  fakeIDDLRecords,
  fakeUserData,
  fakeRecords
};
