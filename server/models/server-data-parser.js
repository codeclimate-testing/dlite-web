'use strict';

function parse(data) {

  let application   = data.application;
  let addresses     = data.addresses;
  let emails        = data.emails;
  let phone_numbers = data.phone_numbers;
  let home_address, mailing_address;

  addresses.forEach(function(element) {
    if(element.type === 'home'){
      home_address = element;
    }
    else if(element.type === 'mailing') {
      mailing_address = element;
    }
  });


  return {
    id:   application.id,
    legalName: {
      firstName:  application.first_name,
      middleName: application.middle_name,
      lastName:   application.last_name
    },
    dateOfBirth:  application.date_of_birth,
    hairColor:    application.hair_color,
    eyeColor:     application.eye_color,
    homeAddress: {
      street_1: home_address.street_address_1,
      street_2: home_address.street_address_2,
      city:     home_address.city,
      state:    home_address.state,
      zip:      home_address.zip
    },
    mailingAddress: {
      street_1: mailing_address.street_address_1,
      street_2: mailing_address.street_address_2,
      city:     mailing_address.city,
      state:    mailing_address.state,
      zip:      mailing_address.zip
    },
    contactMethods: {
      emailAddress: emails[0].address,
      phoneNumber:  phone_numbers[0].number
    }
  };
}

module.exports = parse;
