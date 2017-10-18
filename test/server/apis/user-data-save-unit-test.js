'use strict';

const env = require('../../support/env');

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const uuidv1 = require('uuid/v1');

const dbHelper = require('../../support/db-helper');

const knex = require('../../../server/db/connect')();
const userDataController = require('../../../server/api')

describe('Unit Tests: APIs for CRUD operations on user data', () => {
  let _request = {};
  let _response = {};
  const uuid = uuidv1();
  const type = 'DL';
  const source = 'online';
  const number = 12345;
  const first_name = 'John';
  const middle_name = 'Leo';
  const last_name = 'Smith';
  const name_suffix = 'Mr.';
  const date_of_birth = '11/11/1991';
  const language = 'English';
  const hair_color = 'Brown';
  const eye_color = 'Hazel';
  const addressType = 'Mailing';
  const street_address_1 = '123 Main St';
  const street_address_2 = '456 Sand Lane';
  const city = 'Crazydino';
  const state = 'CA';
  const zip = '98787';
  const email_address = 'some_email@example.com';
  const phone_number = '(916) 555-1111';

  const validateResponse = function(response){
    assert(response.id, uuid);
    assert(response.type, type);
    assert(response.source, source);
    assert(response.number, number);
    assert(response.first_name, first_name);
    assert(response.middle_name, middle_name);
    assert(response.last_name, last_name);
    assert(response.name_suffix, name_suffix);
    assert(response.language, language);
    assert(response.hair_color, hair_color);
    assert(response.eye_color, eye_color);
    assert(response.addressType, addressType);
    assert(response.street_address_1, street_address_1);
    assert(response.street_address_2, street_address_2);
    assert(response.city, city);
    assert(response.state, state);
    assert(response.zip, zip);
    assert(response.email_address, email_address);
    assert(response.phone_number, phone_number);
  }

  beforeEach((done) => {
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

  describe('POST user data', (done) => {
    before((done) => {
      //Create request and response objects
      _request = httpMocks.createRequest({
        method: 'POST',
        url: '/api/user-data',
        body: {
          application: {
            uuid,
            type,
            source,
            number,
            first_name,
            middle_name,
            last_name,
            name_suffix,
            date_of_birth,
            language,
            hair_color,
            eye_color
          },
          addresses: {
            uuid,
            addressType,
            street_address_1,
            street_address_2,
            city,
            state,
            zip
          },
          emails: {
            uuid,
            email_address
          },
          phoneNumber: {
            uuid,
            phone_number
          }
        }
      });
      _response = httpMocks.createResponse({eventEmitter: require('events').EventEmitter});

      const postUserDataHandler = userDataController.postUserDataHandler;
      postUserDataHandler(_request, _response);

      _response.on('end', () => {
        done();
      })
    });

    it('responds with http status 200', (done) => {
      assert.equal(_response.statusCode, 200);
      done();
    });

    it('should post application data', (done) => {
      const _data = _response._getData()[0];
      validateResponse(_data);
      done();
    });
  });

  describe('GET user data', (done) => {
    before((done) => {
      _request = httpMocks.createRequest({
        method: 'GET',
        url: '/api/user-data',
        params: {
          uuid: uuid
        }
      });
      _response = httpMocks.createResponse({eventEmitter: require('events').EventEmitter});

      const getUserDataHandler = userDataController.getUserDataHandler;
      getUserDataHandler(_request, _response);

      _response.on('end', () => {
        done();
      })
    });

    it('responds with http status 200', (done) => {
      assert(_response.statusCode, 200)

      done();
    });

    it('should get user data', (done) => {
      const _data = _response._getData()[0];
      validateResponse(_data);
      done();
    });
  });
});
