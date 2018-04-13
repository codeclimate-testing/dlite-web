'use strict';

import assert                   from 'assert';
import { spy }                  from 'sinon';
import { getAuthStatus }        from '../../../client/actions/get-auth-status';

describe('getAuthStatus() action', function() {
  let dispatch, response, fetcher, url, actionFunction;

  beforeEach(function() {
    response = {
      status: 200,
      json: () => { return {status: true}}
    };

    dispatch = spy();

    fetcher = (fetchPath) => {
      url = fetchPath;
      return Promise.resolve(response)
    };
    actionFunction = getAuthStatus(dispatch);
  });

  it('calls fetch on the right api endpoint', function() {
    actionFunction(fetcher);
    assert.equal(url, '/api/isLoggedIn');
  });

  it('dispatches action to update redux', function() {
    actionFunction(fetcher).then((res) => {
      let action = dispatch.getCall(0).args[0];
      assert.deepEqual(action,{
        type: 'UPDATE_LOGGED_IN',
        payload: { value: true }
      });
    });
  });
});