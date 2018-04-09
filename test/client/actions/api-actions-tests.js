'use strict';

import assert                   from 'assert';
import { spy }                  from 'sinon';
import {
  postData,
  getData
} from '../../../client/actions/api-actions';

describe('api actions', function() {
  let dispatch, response, fetcher, url;
  let id = '5005';
  let body = {
    userID: '100',
    IDApp: {},
    DLApp: {},
    myBasics: {}
  };

  beforeEach(function() {
    response = {
      status: 200,
      json: () => {
        return {
          applicationID: '5005'
        };
      }
    };

    dispatch = spy();

    fetcher = (fetchPath) => {
      url = fetchPath;
      return Promise.resolve(response);
    };
  });

  describe('#postData', function() {
    it('calls fetch on the right api endpoint', function() {
      let actionFunction = postData(body, fetcher);
      actionFunction(dispatch);
      assert.equal(url, '/api/application', 'url endpoint incorrect');
    });

    it('returns response on success', function() {
      let actionFunction = postData(body, fetcher);
      actionFunction(dispatch).then((res) => {
        assert.deepEqual(res, response, 'response not returned');
      });
    });

    it('dispatches action to update redux on success', function() {
      let actionFunction = postData(body, fetcher);
      actionFunction(dispatch).then(() => {
        let action = dispatch.getCall(0).args[0];
        assert.deepEqual(action,{
          type: 'POST_DATA_SUCCESS',
          payload: { value: response.json() }
        }, 'post data success not dispatched');
      });
    });

    it('dispatches POST_DATA_ERROR on error', function() {
      response.status = 500;
      let actionFunction = postData(body, fetcher);
      actionFunction(dispatch).catch((res) => {
        let action = dispatch.getCall(0).args[0];
        assert.deepEqual(action,{
          type: 'POST_DATA_ERROR',
          payload: { value: response.json() }
        }, 'post data error not dispatched');
      });
    });

    it('does not save data on error', function() {
      response.status = 500;
      let actionFunction = postData(body, fetcher);
      actionFunction(dispatch).catch((res) => {
        let action = dispatch.getCall(0).args[0];
        assert.ok(action.type !== 'POST_DATA_SUCCESS');
      });
    });
  });

  describe('#getData', function() {
    it('calls fetch on the right api endpoint', function() {
      let actionFunction = getData(id, fetcher);
      actionFunction(dispatch);
      assert.equal(url, '/api/application/' + id);
    });

    it('returns response on success', function() {
      let actionFunction = postData(body, fetcher);
      actionFunction(dispatch)
        .then((res) => {
          assert.deepEqual(res, response, 'response not returned');
        })
    });

    it('dispatches action to update redux on success', function() {
      let actionFunction = postData(body, fetcher);
      actionFunction(dispatch).catch(() => {
        let action = dispatch.getCall(0).args[0];
        assert.deepEqual(action,{
          type: 'GET_DATA_SUCCESS',
          payload: {
            value: response.json(),
            error: null
          }
        }, 'get data success not dispatched');
      });
    });

    it('dispatches POST_DATA_ERROR on error', function() {
      response.status = 500;
      let actionFunction = postData(body, fetcher);
      actionFunction(dispatch).catch((res) => {
        let action = dispatch.getCall(0).args[0];
        assert.deepEqual(action,{
          type: 'GET_DATA_ERROR',
          payload: { value: response.json() }
        }, 'get data error not dispatched');
      });
    });
  });
});