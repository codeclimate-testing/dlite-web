'use strict';

const assert                = require('assert');
const getAddress            = require('../../../../../server/models/parsers/server-to-client-parsers/get-address');

describe('extracting address info', function() {

  let addresses;

  beforeEach(function() {
    addresses = [{
      type: 'home',
      street_address_1: '',
      street_address_2: '',
      city: '',
      state: '',
      zip: ''
    }, {
      type: 'mailing',
      street_address_1: '',
      street_address_2: '',
      city: '',
      state: '',
      zip: ''
    }];
  });

  it('returns placeholder if addresses are empty', function() {
    assert.deepEqual(getAddress(addresses), {
      homeAddressSameAsMailing: '',
      home: {
        street_1: '',
        street_2: '',
        city:     '',
        state:    '',
        zip:      ''
      },
      mailing: {
        street_1: '',
        street_2: '',
        city:     '',
        state:    '',
        zip:      ''
      }
    });
  });

  it('returns different mailing and home addresses', function() {
    addresses[0].street_address_1 = '11432 street';
    addresses[0].city = 'Roseville';
    addresses[0].state = 'CA';
    addresses[0].zip = '9999';
    addresses[1].street_address_1 = '8888 other street';
    addresses[1].city = 'Corvallis';
    addresses[1].state = 'VT';
    addresses[1].zip = '000';
    assert.deepEqual(getAddress(addresses), {
      homeAddressSameAsMailing: 'No',
      home: {
        street_1: '11432 street',
        street_2: '',
        city:     'Roseville',
        state:    'CA',
        zip:      '9999'
      },
      mailing: {
        street_1: '8888 other street',
        street_2: '',
        city:     'Corvallis',
        state:    'VT',
        zip:      '000'
      }
    });
  });

  it('returns same addresses', function() {
    addresses[0].street_address_1 = '11432 street';
    addresses[0].city = 'Roseville';
    addresses[0].state = 'CA';
    addresses[0].zip = '9999';
    addresses[1].street_address_1 = addresses[0].street_address_1;
    addresses[1].city = addresses[0].city;
    addresses[1].state = addresses[0].state;
    addresses[1].zip = addresses[0].zip;

    assert.deepEqual(getAddress(addresses), {
      homeAddressSameAsMailing: 'Yes',
      home: {
        street_1: '11432 street',
        street_2: '',
        city:     'Roseville',
        state:    'CA',
        zip:      '9999'
      },
      mailing: {
        street_1: '11432 street',
        street_2: '',
        city:     'Roseville',
        state:    'CA',
        zip:      '9999'
      }
    });
  });
});
