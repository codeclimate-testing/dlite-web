'use strict';

// Set APP_ENV to 'test' to connect with test db
process.env.APP_ENV = 'test';

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const uuidv1 = require('uuid/v1');

const knex = require('../../../server/db/connect')();
const userDataController = require('../../../server/api/v1')

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
  const phone_number = '(916) 555-111';

  before((done) => {
    //Clean up test db
    knex('applications').truncate()
    .then(() => {
      return knex('addresses').truncate()
    })
    .then(() => {
      return knex('emails').truncate()
    })
    .then(() => {
      return knex('phone_numbers').truncate()
    })
    .then(() => {
      done();
    });
  });

  after((done) => {
     //Clean up test db
     knex('applications').truncate()
     .then(() => {
       return knex('addresses').truncate()
     })
     .then(() => {
       return knex('emails').truncate()
     })
     .then(() => {
       return knex('phone_numbers').truncate()
     })
     .then(() => {
       done();
     });
  });

  describe('POST user data', (done) => {

    before((done) => {
      //Create request and response objects
      _request = httpMocks.createRequest({
        method: 'POST',
        url: '/api/v1/user-data',
        body: {
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
          eye_color,
          addressType,
          street_address_1,
          street_address_2,
          city,
          state,
          zip,
          email_address,
          phone_number
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

      assert(_data.id, uuid);
      assert(_data.type, type);
      assert(_data.source, source);
      assert(_data.number, number);
      assert(_data.first_name, first_name);
      assert(_data.middle_name, middle_name);
      assert(_data.last_name, last_name);
      assert(_data.name_suffix, name_suffix);
      assert(_data.language, language);
      assert(_data.hair_color, hair_color);
      assert(_data.eye_color, eye_color);
      assert(_data.addressType, addressType);
      assert(_data.street_address_1, street_address_1);
      assert(_data.street_address_2, street_address_2);
      assert(_data.city, city);
      assert(_data.state, state);
      assert(_data.zip, zip);
      assert(_data.email_address, email_address);
      assert(_data.phone_number, phone_number);

      done();
    });
  });

  describe('GET user data', (done) => {
    before((done) => {
      _request = httpMocks.createRequest({
        method: 'GET',
        url: '/api/v1/user-data',
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

      assert(_data.id, uuid);
      assert(_data.type, type);
      assert(_data.source, source);
      assert(_data.number, number);
      assert(_data.first_name, first_name);
      assert(_data.middle_name, middle_name);
      assert(_data.last_name, last_name);
      assert(_data.name_suffix, name_suffix);
      assert(_data.language, language);
      assert(_data.hair_color, hair_color);
      assert(_data.eye_color, eye_color);
      assert(_data.addressType, addressType);
      assert(_data.street_address_1, street_address_1);
      assert(_data.street_address_2, street_address_2);
      assert(_data.city, city);
      assert(_data.state, state);
      assert(_data.zip, zip);
      assert(_data.email_address, email_address);
      assert(_data.phone_number, phone_number);

      done();
    });
  });
});
