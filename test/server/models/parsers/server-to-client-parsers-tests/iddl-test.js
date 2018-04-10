'use strict';

const assert              = require('assert');
const getIDDL             = require('../../../../../server/models/parsers/server-to-client-parsers/iddl');
const defaultData         = require('../../../../../client/helpers/data/default');
const dataHelper          = require('../../../../support/data-helper');
const dbHelper            = require('../../../../support/db-helper');
const post                = require('../../../../../server/models/db/post-application');
const getApplication      = require('../../../../../server/models/db/get-application');

describe('extracting IDDL object', function() {
  let IDDLApp, parsedData, clientData;

  beforeEach(function(done) {
    IDDLApp = defaultData.IDDL.application;
    IDDLApp.id = '99';
    clientData = dataHelper.fakeRecords(IDDLApp);
    post.saveApplication(clientData)
    .then(() => { done(); })
    .catch(done);
  });

  afterEach(function(done) {
    dbHelper
      .clearAll()
      .then(() => { done(); })
      .catch(done);
  });

  it('returns all the objects in an empty IDDLApp application', function(done) {
    getApplication.byId('99')
    .then((records) => {
      parsedData = getIDDL(records);
      assert.deepEqual(parsedData.basics, defaultData.IDDL.basics);
      assert.deepEqual(parsedData.IDApp, defaultData.IDDL.IDApp);
      assert.deepEqual(parsedData.DLApp, defaultData.IDDL.DLApp);
      assert.deepEqual(parsedData.cardType, defaultData.IDDL.cardType);
      assert.deepEqual(parsedData.voting, defaultData.IDDL.voting);
      done();
    })
    .catch(done);
  });
});
