'use strict';

const assert    = require('assert');
const httpMocks = require('node-mocks-http');
const uuidv1    = require('uuid/v1');

const dbHelper      = require('../../support/db-helper');
const dataHelper    = require('../../support/data-helper');
const db            = require('../../../server/db/connect')();
const ctrl          = require('../../../server/controllers');

describe('Testing application APIs for basic CRUD operations', () => {

  const id      = uuidv1();
  let _request  = {};
  let _response = {};


  let application = dataHelper.fakeClientData();
  application.id = id;

  const validateResponse = function(response){
    let _data = response.application;

    assert(application.id, _data.id);
    assert(application.legalName.firstName, _data.legalName.firstName);
    assert(application.legalName.middleName, _data.legalName.middleName);
    assert(application.legalName.lastName, _data.legalName.lastName);
    assert(application.dateOfBirth, _data.dateOfBirth);
    assert(application.homeAddress.street_1, _data.homeAddress.street_1);
    assert(application.homeAddress.street_2, _data.homeAddress.street_2);
    assert(application.homeAddress.city, _data.homeAddress.city);
    assert(application.homeAddress.state, _data.homeAddress.state);
    assert(application.homeAddress.zip, _data.homeAddress.zip);
    assert(application.mailingAddress.street_1, _data.mailingAddress.street_1);
    assert(application.mailingAddress.street_2, _data.mailingAddress.street_2);
    assert(application.mailingAddress.city, _data.mailingAddress.city);
    assert(application.mailingAddress.state, _data.mailingAddress.state);
    assert(application.mailingAddress.zip, _data.mailingAddress.zip);
    assert(application.physicalTraits.hairColor, _data.physicalTraits.hairColor);
    assert(application.physicalTraits.eyeColor, _data.physicalTraits.eyeColor);
    assert(application.physicalTraits.sex, _data.physicalTraits.sex);
    assert(application.contactMethods.emailAddress, _data.contactMethods.emailAddress);
    assert(application.contactMethods.phoneNumber, _data.contactMethods.phoneNumber);
  }

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
      //Create request and response objects
      _request = httpMocks.createRequest({
        method: 'POST',
        url: '/api/application',
        body: application
      });
      _response = httpMocks.createResponse({eventEmitter: require('events').EventEmitter});

      const createApplication = ctrl.createApplication;
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
      validateResponse(_data);
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
      validateResponse(_data);
      done();
    });
  });
});