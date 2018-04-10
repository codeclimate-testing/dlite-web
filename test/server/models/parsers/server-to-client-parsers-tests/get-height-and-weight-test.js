'use strict';

const assert                = require('assert');
const getHeightAndWeight    = require('../../../../../server/models/parsers/server-to-client-parsers/get-height-and-weight');

describe('extracting height and weight', function() {

  let application;

  beforeEach(function() {
    application = {
      weight: 0,
      height_feet: 0,
      height_inches: 0
    }
  });

  it('returns placeholder if height_feet is 0', function() {
    assert.deepEqual(getHeightAndWeight(application), {
      weight: '',
      heightFeet: '',
      heightInches: ''
    });
  });

  it('returns stats if height_feet > 0', function() {
    application = {
      weight: 140,
      height_feet: 5,
      height_inches: 8
    };

    assert.deepEqual(getHeightAndWeight(application), {
      weight: '140',
      heightFeet: '5',
      heightInches: '8'
    });
  });

});
