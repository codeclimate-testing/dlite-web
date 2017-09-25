'use strict';

const env                = require('../../support/env');
const assert             = require('assert');
const getApplicationData = require('../../../server/models/get-application-data');

describe('getApplicationData', function() {
  it('returns undefined when nothing is found', function(done) {
    getApplicationData('not-here-yo')
      .then((record) => {
        assert.equal(record, undefined);
        done();
      })
      .catch(done);
  });
});
