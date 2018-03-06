'use strict';

const assert = require('assert');

import {
  hideMain,
  getErrorMessage,
} from '../../../../client/helpers/data/api';

describe('#api data helpers', function() {
  let data;
  beforeEach(function() {
    data = {
      server: {
        apiState: ''
      }
    }
  });


  describe('#hideMain', function() {
    it('returns "hide" if apiStatus is "loading"', function() {
      data.server.apiStatus = 'loading';
      assert.equal(hideMain(data), 'hide');
    });

    it('returns a blank string if apiStatus is ""', function() {
      assert.equal(hideMain(data), '');
    });

    it('returns a blank string if apiStatus is "success"', function() {
      data.server.apiStatus = 'success';
      assert.equal(hideMain(data), '');
    });

    it('returns a blank string if apiStatus is "error"', function() {
      data.server.apiStatus = 'error';
      assert.equal(hideMain(data), '');
    });
  });

  describe('#getErrorMessage', function() {
    it('returns a blank string if apiStatus is "loading"', function() {
      data.server.apiStatus = 'loading';
      assert.equal(getErrorMessage(data), '');
    });

    it('returns a blank string if apiStatus is ""', function() {
      assert.equal(getErrorMessage(data), '');
    });

    it('returns a blank string if apiStatus is "success"', function() {
      data.server.apiStatus = 'success';
      assert.equal(getErrorMessage(data), '');
    });

    it('returns a string if apiStatus is "error"', function() {
      data.server.apiStatus = 'error';
      assert.equal(getErrorMessage(data), 'Sorry, something went wrong');
    });
  });
});
