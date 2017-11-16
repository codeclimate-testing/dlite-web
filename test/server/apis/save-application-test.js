'use strict';

const assert    = require('assert');
const httpMocks = require('node-mocks-http');
const uuidv1    = require('uuid/v1');

const dbHelper  = require('../../support/db-helper');
const db        = require('../../../server/db/connect')();
const ctrl      = require('../../../server/controllers');

describe('Testing application APIs for basic CRUD operations', () => {

  const id      = uuidv1();
  let _request  = {};
  let _response = {};


  let application = {
    id: id,
    legalName: {
      firstName:  "John",
      middleName: "Leo",
      lastName:   "Smith"
    },
    dateOfBirth:  "11/11/1991",
    hairColor:    "Brown",
    eyeColor:     "Hazel",
    homeAddress: {
      street_1:   "123 Main St",
      street_2:   "456 Sand Lane",
      city:       "CrazydoniHome",
      state:      "CA",
      zip:        "11111"
    },
    mailingAddress: {
      street_1:   "987 Main St",
      street_2:   "654 Sand Lane",
      city:       "CrazydoniMail",
      state:      "CA",
      zip:        "99999"
    },
    contactMethods: {
      emailAddress: "rwdjnj@jkdhudf.com ",
      phoneNumber:  "378232111"
    }
  };

  const validateResponse = function(response){
    assert(application.id, application.id);
    assert(application.legalName.firstName, application.legalName.firstName);
    assert(application.legalName.middleName, application.legalName.middleName);
    assert(application.legalName.lastName, application.legalName.lastName);
    assert(application.dateOfBirth, application.dateOfBirth);
    assert(application.hairColor, application.hairColor);
    assert(application.eyeColor, application.eyeColor);
    assert(application.homeAddress.street_1, application.homeAddress.street_1);
    assert(application.homeAddress.street_2, application.homeAddress.street_2);
    assert(application.homeAddress.city, application.homeAddress.city);
    assert(application.homeAddress.state, application.homeAddress.state);
    assert(application.homeAddress.zip, application.homeAddress.zip);
    assert(application.mailingAddress.street_1, application.mailingAddress.street_1);
    assert(application.mailingAddress.street_2, application.mailingAddress.street_2);
    assert(application.mailingAddress.city, application.mailingAddress.city);
    assert(application.mailingAddress.state, application.mailingAddress.state);
    assert(application.mailingAddress.zip, application.mailingAddress.zip);
    assert(application.contactMethods.emailAddress, application.contactMethods.emailAddress);
    assert(application.contactMethods.phoneNumber, application.contactMethods.phoneNumber);
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

  describe('create application', (done) => {
    before((done) => {
      //Create request and response objects
      _request = httpMocks.createRequest({
        method: 'POST',
        url: '/api/application',
        body: {
          application: application
        }
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

  describe('get application', (done) => {
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
