'use strict';

const assert      = require('assert');
const voterChoiceConverter = require('../../../server/helpers/voter-choice');

describe('voterChoiceConverter', function() {
  describe('opted-out string to values', function() {
    it('I am a new voter in California', function() {
      let str = 'new';
      let values = voterChoiceConverter.clientToDBMapping(str);
      assert.equal(values.opted_out, 'No');
      assert.equal(values.type, 'new');
    });

    it('I am already registered to vote in California', function() {
      let str = 'existing';
      let values = voterChoiceConverter.clientToDBMapping(str);
      assert.equal(values.opted_out, 'No');
      assert.equal(values.type, 'existing');
    });

    it('I am eligible to vote, but do not want to register to vote', function() {
      let str = 'opt-out';
      let values = voterChoiceConverter.clientToDBMapping(str);
      assert.equal(values.opted_out, 'Yes');
      assert.equal(values.type, 'existing');
    });
  });

  describe('opted-out values to string', function() {
    it('I am a new voter in California', function() {
      let values = {opted_out: 'No', type: 'new'};
      let str = voterChoiceConverter.DBToClientMapping(values);
      assert.equal(str, 'new');
    });

    it('I am already registered to vote in California', function() {
      let values = {opted_out: 'No', type: 'existing'};
      let str = voterChoiceConverter.DBToClientMapping(values);
      assert.equal(str, 'existing');
    });

    it('I am eligible to vote, but do not want to register to vote', function() {
      let values = {opted_out: 'Yes', type: 'existing'};
      let str = voterChoiceConverter.DBToClientMapping(values);
      assert.equal(str, 'opt-out');
    });
  });
});
