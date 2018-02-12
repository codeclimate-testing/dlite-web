'use strict';

const assert    = require('assert');
const httpMocks = require('node-mocks-http');
const uuidv1    = require('uuid/v1');

const dbHelper      = require('../../support/db-helper');
const dataHelper    = require('../../support/data-helper');
const ctrl          = require('../../../server/controllers');

describe('Testing application APIs for basic CRUD operations', () => {

  const id      = uuidv1();
  let _request  = {};
  let _response = {};


  let application = dataHelper.fakeClientData();
  application.id = id;

  before((done) => {
    dbHelper
      .clearAll()
      .then(() => { done(); })
      .catch(() => { done(); });
  });

  after((done) => {
    dbHelper
      .clearAll()
      .then(() => { done(); })
      .catch(() => { done(); });
  });

  describe('create new application', (done) => {
    before((done) => {
      //Create request object
      _request = httpMocks.createRequest({
        method: 'POST',
        url: '/api/application',
        body: application
      });
      //create response objects
      _response = httpMocks.createResponse({
        eventEmitter: require('events').EventEmitter
      });
      //Call controller function
      const createApplication = ctrl.postApplication;
      createApplication(_request, _response);

      _response.on('end', () => {
        done();
      })

    });

    it('responds with http status 200', (done) => {
      assert.equal(_response.statusCode, 200);
      done();
    });

    it('should post application info', (done) => {
      const _data = _response._getData();
      assert.equal(application.id, _data.application_id);
      done();
    });
  });

  describe('get existing application', (done) => {
    before((done) => {
      _request = httpMocks.createRequest({
        method: 'GET',
        url: '/api/application',
        params: {
          id: id
        }
      });
      _response = httpMocks.createResponse({eventEmitter: require('events').EventEmitter});

      const getApplication = ctrl.getApplication;
      getApplication(_request, _response);
      _response.on('end', () => {
        done();
      })
    });

    it('responds with http status 200', (done) => {
      assert(_response.statusCode, 200)
      done();
    });

    it('should get application info', (done) => {
      const _data = _response._getData();
      assert.deepEqual(application, _data.application);
      done();
    });
  });
});