'use strict';

function extractAddresses(data) {
  if(data.basics.address.home.street_1 === '') { return null; }
  return [
    {
      application_id:     data.id,
      type:               'mailing',
      street_address_1:   data.basics.address.mailing.street_1,
      street_address_2:   data.basics.address.mailing.street_2,
      city:               data.basics.address.mailing.city,
      state:              data.basics.address.mailing.state,
      zip:                data.basics.address.mailing.zip
    },
    {
      application_id:     data.id,
      type:               'home',
      street_address_1:   data.basics.address.home.street_1,
      street_address_2:   data.basics.address.home.street_2,
      city:               data.basics.address.home.city,
      state:              data.basics.address.home.state,
      zip:                data.basics.address.home.zip
    }
  ];
}

module.exports = extractAddresses;