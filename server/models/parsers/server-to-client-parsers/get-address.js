'use strict';
const dataParser = require('../data-parser');

function address(addresses) {

  let home_address = {
    'street_address_1': '',
    'street_address_2': '',
    'city': '',
    'state': '',
    'zip': ''
  };
  let mailing_address = {
    'street_address_1': '',
    'street_address_2': '',
    'city': '',
    'state': '',
    'zip': ''
  };

  addresses.forEach(function(address) {
    if(address.type === 'home'){
      home_address = address;
    }
    if(address.type === 'mailing') {
      mailing_address = address;
    }
  });

  let sameAddresses = dataParser.sameAddress(home_address, mailing_address);

  return {
    homeAddressSameAsMailing: sameAddresses,
    home: {
      street_1: home_address.street_address_1,
      street_2: home_address.street_address_2,
      city:     home_address.city,
      state:    home_address.state,
      zip:      home_address.zip,
    },
    mailing: {
      street_1: mailing_address.street_address_1,
      street_2: mailing_address.street_address_2,
      city:     mailing_address.city,
      state:    mailing_address.state,
      zip:      mailing_address.zip,
    }
  };

}

module.exports = address;