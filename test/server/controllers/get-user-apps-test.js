'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controller  = require('../../../server/controllers/get-user-apps');
const dbHelper    = require('../../support/db-helper');
const dataHelper  = require('../../support/data-helper');
const postApp     = require('../../../server/models/db/post-application');
const dataParser  = require('../../../server/models/parsers/data-parser');

describe('Get User Apps controller', () => {
  let res, req;

  beforeEach(function(done){
    req = httpMocks.createRequest({
      method: 'GET',
      url: '/api/user/10001',
      params: {
        id: '10001'
      }
    });
    res = httpMocks.createResponse({});

    dbHelper
      .clearAll()
      .then(() => { done(); })
      .catch(done);
  });

  it('returns apps associated with user uuid', function(done) {
    let cdlData = dataHelper.CDLData.clientData();
    let iddlData = dataHelper.IDDLData.fakeClientData();
    let parsedData1 = dataHelper.fakeRecords(cdlData);
    let parsedData2 = dataHelper.fakeRecords(iddlData);
    let cdlName     = dataParser.buildName(parsedData1.application);
    let iddlName    = dataParser.buildName(parsedData2.application);

    postApp.saveApplication(parsedData1)
    .then(() => {
      return postApp.saveApplication(parsedData2)
      .then(() => {
        return controller(req, res);
      })
      .then(() => {
        let data = JSON.parse(res._getData());

        assert.equal(res.statusCode, 200);
        assert.equal(data.userID, req.params.id);
        assert.equal(data.appsLength, 2);

        let cdlApp = data.apps.find(app => {
          return app.cardType[0] === 'CDL';
        });

        let iddlApp = data.apps.find(app => {
          return app.cardType[0] === 'ID' || app.cardType[0] === 'DL';
        });

        assert.equal(cdlApp.name, cdlName);
        assert.equal(iddlApp.name, iddlName);

        assert.ok(cdlApp.cardType.includes('CDL'));
        assert.ok(iddlApp.cardType.includes('ID'));
        assert.ok(iddlApp.cardType.includes('DL'));

        assert.ok(cdlApp.cardAction.includes(cdlData.cardAction));
        assert.ok(iddlApp.cardAction.includes(iddlData.IDApp.action));
        assert.ok(iddlApp.cardAction.includes(iddlData.DLApp.action));

      });
    })
    .then(() => { done(); })
    .catch(done);
  });

});
