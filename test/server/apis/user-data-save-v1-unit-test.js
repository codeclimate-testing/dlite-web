'use strict';

process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const httpMocks = require('node-mocks-http');
const userDataController = require('../../../server/api/v1')

describe('Unit Tests: APIs for CRUD operations on user data', () => {

  describe('Get User Data', () => {
    let _request = {};
    let _response = {};
    const uuid = '6c84fb90-12c4-11e1-840d-7b25c5ee775b';

    beforeEach((done) => {
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

    it('Should return 200', (done) => {
      expect(_response.statusCode).to.equal(200);
      done();
    });

    it('Should get user data', (done) => {
      const _data = _response._getData()[0];
      expect(_data.id).to.equal(uuid);
      done();
    });

  });

  // describe('Post User Data', () => {
  //   let _request = {};
  //   let _response = {};

  //   beforeEach((done) => {
  //     _request = httpMocks.createRequest({

  //     });
  //     _response = httpMocks.createResponse();

  //   });

  // });

});
