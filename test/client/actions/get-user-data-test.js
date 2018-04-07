'use strict';

import assert                   from 'assert';
import { spy }                  from 'sinon';
import { getUserData }          from '../../../client/actions/get-user-data';

describe('getTranslation() action', function() {
  let dispatch, uuid, response, fetcher, url, userData;

  beforeEach(function() {
    uuid = '100';
    userData = {
      appsLength: 2,
      userID: uuid,
      apps: [{
        name: '',
        cardType: [],
        cardAction: []
      }, {
        name: '',
        cardType: [],
        cardAction: []
      }]
    };

    response = {
      status: 200,
      json: () => { return userData; }
    };

    dispatch = spy();

    fetcher = (fetchPath) => {
      url = fetchPath;
      return Promise.resolve(response);
    };
  });

  it('calls fetch on /api/user/', function() {
    let actionFunction = getUserData(uuid, fetcher);
    actionFunction(dispatch);
    assert.equal(url, '/api/user/' + uuid);
  });

  describe('#successful res', function() {
    it('updates user data after 200 status', function() {
      let actionFunction = getUserData(uuid, fetcher);
      actionFunction(dispatch).then((res) => {
        let apiAction = dispatch.getCall(1).args[0];
        assert.deepEqual(apiAction, {
          type: 'UPDATE_USER_DATA',
          payload: {
            value: userData
          }
        });
      });
    });
  });

  describe('#error 500 res', function() {
    it('updates user data with placeholder + uuid', function() {
      response = {
        status: 500,
        json: () => { return {message: 'cannot retrieve userData'}}
      };
      let actionFunction = getUserData(uuid, fetcher);
      actionFunction(dispatch).then(() => {
        assert.ok(dispatch.calledWith({
          type: 'UPDATE_USER_DATA',
          payload: {
            value: {
              appsLength: 0,
              userID: uuid,
              apps: [{
                name: '',
                cardType: [],
                cardAction: []
              }]
            }
          }
        }), 'update user data not dispatched with placeholder object');
      });
    });
  });

  describe('#error not logged in res', function() {
    it('dispatches GET_DATA_ERROR', function() {
      response = {
        status: 401,
        json: () => {
          return { message: 'not logged in '};
        }
      };

      let actionFunction = getUserData(uuid, fetcher);
      actionFunction(dispatch).then(() => {
        assert.ok(dispatch.calledWith({
          type: 'GET_DATA_ERROR',
          payload: {
            data: {},
            error: 'user-fail'
          }
        }), 'get data error not dispatched');
      });
    });
  });
});