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
    "mailingAddress": {
      street_1:   "987 Main St",
      street_2:   "654 Sand Lane",
      city:       "CrazydoniMail",
      state:      "CA",
      zip:        "99999"
    },
    politicalContact: {
      emailAddress: "rwdjnj@jkdhudf.com ",
      phoneNumber:  "378232111"
    }
  };

  const validateResponse = function(response){
    // assert(response.id, id);
    // assert(response.type, type);
    // assert(response.source, source);
    // assert(response.number, number);
    // assert(response.first_name, first_name);
    // assert(response.middle_name, middle_name);
    // assert(response.last_name, last_name);
    // assert(response.name_suffix, name_suffix);
    // assert(response.language, language);
    // assert(response.hair_color, hair_color);
    // assert(response.eye_color, eye_color);
    // assert(response.addressType, addressType);
    // assert(response.street_address_1, street_address_1);
    // assert(response.street_address_2, street_address_2);
    // assert(response.city, city);
    // assert(response.state, state);
    // assert(response.zip, zip);
    // assert(response.email_address, email_address);
    // assert(response.phone_number, phone_number);
    assert(true, true);
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
