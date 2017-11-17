'use strict';

function parse(data) {

  if(!data) {
    return {
      application: {
        legalName: {
          firstName:  '',
          middleName: '',
          lastName:   ''
        },
        dateOfBirth: '',
        physicalTraits: {
          hairColor:    '',
          eyeColor:     ''
        },
        homeAddress: {
          street_1: '',
          street_2: '',
          city:     '',
          state:    '',
          zip:      ''
        },
        mailingAddress: {
          street_1: '',
          street_2: '',
          city:     '',
          state:    '',
          zip:      ''
        },
        politicalContact: {
          emailAddress: '',
          phoneNumber:  ''
        }
      }
    };
  }

  let application   = data.application;
  let addresses     = data.addresses;
  let emails        = data.emails;
  let phone_numbers = data.phone_numbers;
  let home_address, mailing_address;
  let data_of_birth = '';

  addresses.forEach(function(element) {
    if(element.type === 'home'){
      home_address = element;
    }
    else if(element.type === 'mailing') {
      mailing_address = element;
    }
  });

  if(application.date_of_birth){
    data_of_birth = {
      day: (new Date(application.date_of_birth).getDate()).toString(),
      month: (new Date(application.date_of_birth).getMonth() + 1).toString(),
      year: (new Date(application.date_of_birth).getFullYear()).toString()
    }
  }

  return {

    application: {
      id:   application.id,
      legalName: {
        firstName:  application.first_name,
        middleName: application.middle_name,
        lastName:   application.last_name
      },
      dateOfBirth: data_of_birth,
      physicalTraits: {
        hairColor:    application.hair_color,
        eyeColor:     application.eye_color
      },
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

    }
  };
}

module.exports = parse;
