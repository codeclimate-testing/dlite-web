'use strict';

const assert      = require('assert');
const dataParser  = require('../../../server/helpers/data-parser');

describe('dataParser', function() {

  describe('opted-out string to values', function() {
    it('I am a new voter in California', function() {
      let str = 'I am a new voter in California';
      let values = dataParser.optedStrToValues(str);
      assert.equal(values.opted_out, 'No');
      assert.equal(values.type, 'new');
    });

    it('I am already registered to vote in California', function() {
      let str = 'I am already registered to vote in California';
      let values = dataParser.optedStrToValues(str);
      assert.equal(values.opted_out, 'No');
      assert.equal(values.type, 'existing');
    });

    it('I am eligible to vote, but do not want to register to vote', function() {
      let str = 'I am eligible to vote, but do not want to register to vote';
      let values = dataParser.optedStrToValues(str);
      assert.equal(values.opted_out, 'Yes');
      assert.equal(values.type, 'existing');
    });
  });

  describe('opted-out values to string', function() {
    it('I am a new voter in California', function() {
      let values = {opted_out: 'No', type: 'new'};
      let str = dataParser.optedValuesToStr(values);
      assert.equal(str, 'I am a new voter in California');
    });

    it('I am already registered to vote in California', function() {
      let values = {opted_out: 'No', type: 'existing'};
      let str = dataParser.optedValuesToStr(values);
      assert.equal(str, 'I am already registered to vote in California');
    });

    it('I am eligible to vote, but do not want to register to vote', function() {
      let values = {opted_out: 'Yes', type: 'existing'};
      let str = dataParser.optedValuesToStr(values);
      assert.equal(str, 'I am eligible to vote, but do not want to register to vote');
    });
  });
});
