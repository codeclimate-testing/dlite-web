'use strict';

import assert                   from 'assert';
import { spy }                  from 'sinon';
import { isLoggedIn }           from '../../../client/actions/get-auth-status';

describe('isLoggedIn() action', function() {
  let dispatch, response, fetcher, url;

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
  });

  it('calls fetch on the right api endpoint', function() {
    let actionFunction = isLoggedIn(fetcher);
    actionFunction(dispatch);
    assert.equal(url, '/api/isLoggedIn');
  });

  it('dispatches action to update redux', function() {
    let actionFunction = isLoggedIn(fetcher);
    actionFunction(dispatch).then((res) => {
      let action = dispatch.getCall(0).args[0];
      assert.deepEqual(action,{
        type: 'UPDATE_LOGGED_IN',
        payload: { value: true }
      });
    });
  });
});