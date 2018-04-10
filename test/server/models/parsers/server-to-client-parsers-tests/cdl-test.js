'use strict';

const assert              = require('assert');
const getCDL              = require('../../../../../server/models/parsers/server-to-client-parsers/cdl');
const defaultData         = require('../../../../../client/helpers/data/default');
const dataHelper          = require('../../../../support/data-helper');
const dbHelper            = require('../../../../support/db-helper');
const post                = require('../../../../../server/models/db/post-application');
const getApplication      = require('../../../../../server/models/db/get-application');

describe('extracting CDL object', function() {
  let CDLApp, parsedData, clientData;
  beforeEach(function(done) {
    CDLApp = defaultData.CDL.cdl;
    CDLApp.id = '99';
    clientData = dataHelper.fakeRecords(CDLApp);
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

  it('returns all the objects in the CDL application', function(done) {
    getApplication.byId('99')
    .then((records) => {
      parsedData = getCDL(records);
      assert.deepEqual(parsedData.basics, defaultData.CDL.basics);
      assert.deepEqual(parsedData.organDonation, defaultData.CDL.organDonation);
      assert.deepEqual(parsedData.realID, defaultData.CDL.realID);
      assert.deepEqual(parsedData.cardAction, defaultData.CDL.cardAction);
      assert.deepEqual(parsedData.cardChanges, defaultData.CDL.cardChanges);
      assert.deepEqual(parsedData.cardReplacement, defaultData.CDL.cardReplacement);
      assert.deepEqual(parsedData.voting, defaultData.CDL.voting);
      assert.deepEqual(parsedData.classM, defaultData.CDL.classM);
      done();
    })
    .catch(done);
  });
});
