'use strict';

import assert                   from 'assert';
import { spy }                  from 'sinon';
import { logOut }               from '../../../client/actions/log-out';

describe('logout action', function() {
  let dispatch,response, fetcher, location, url, tstData;

  beforeEach(function() {
    response = {
      status: 200,
      url: 'https://localhost:3000/apply/choose-language'
    };

    dispatch = spy();
    tstData = {
      adaTst: false,
      splashURL: 'https://www.dmv.ca.gov/imageserver/theme/splash/index.html'
    };
    location = {
      href: ''
    };

    fetcher = (fetchPath) => {
      url = fetchPath;
      return Promise.resolve(response);
    };
  });

  it('calls fetch on /apply/log-out', function() {
    let actionFunction = logOut(tstData, location, fetcher);
    actionFunction(dispatch);
    assert.equal(url, '/apply/log-out');
  });

  describe('#TST', function() {
    it('redirects to choose-language if ADA', function() {
      TST_ENV = true;
      tstData.adaTst = true;
      let actionFunction = logOut(tstData, location, fetcher);
      actionFunction(dispatch).then((res) => {
        assert.equal(res.url, response.url);
      });
    });

    it('redirects to tstData.splashURL if not ADA ', function() {
      TST_ENV = true;
      tstData.adaTst = false;
      let actionFunction = logOut(tstData, location, fetcher);
      actionFunction(dispatch).then((res) => {
        assert.equal(res.url, tstData.splashURL);
      });
    });
  });

});