'use strict';

import assert                   from 'assert';
import { spy }                  from 'sinon';
import { logOut }               from '../../../client/actions/log-out';

describe('logout action', function() {
  let dispatch, response, fetcher, location, url;

  beforeEach(function() {
    response = {
      status: 200,
      url: 'https://localhost:3000/apply/choose-language'
    };

    dispatch = spy();

    location = {
      href: ''
    };

    fetcher = (fetchPath) => {
      url = fetchPath;
      return Promise.resolve(response);
    };
  });

  it('calls fetch on /apply/log-out', function() {
    let actionFunction = logOut(location, fetcher);
    actionFunction(dispatch);
    assert.equal(url, '/apply/log-out');
  });

  describe('#TST', function() {
    it('redirects to choose-language if ADA', function() {
      APP_MODE = 'ada';

      let actionFunction = logOut(location, fetcher);
      actionFunction(dispatch).then((res) => {
        assert.equal(res.url, response.url);
      });
    });

    it('redirects to tstData.splashURL if not ADA ', function() {
      APP_MODE = 'tst';
      global.LOGOUT_URL = 'https://www.dmv.ca.gov/imageserver/theme/splash/index.html';
      let actionFunction = logOut(location, fetcher);
      actionFunction(dispatch).then((res) => {
        assert.equal(res.url, 'https://www.dmv.ca.gov/imageserver/theme/splash/index.html');
      });
    });
  });

});