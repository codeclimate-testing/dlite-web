'use strict';

const parserHelper          = require('../data-parser');

function contactMethods(emails, phone_numbers, voting_registrations) {
  let shouldContact = '';
  let emailAddress  = '';
  let phoneNumber1  = '';
  let phoneNumber2  = '';
  let phoneNumber3  = '';
  if(voting_registrations) {
    shouldContact = parserHelper.boolToStr(voting_registrations.should_contact);
  }
  if(emails) {
    emailAddress = emails.address;
  }
  if(phone_numbers) {
    phoneNumber1 = phone_numbers.number.slice(0, 3),
    phoneNumber2 = phone_numbers.number.slice(3, 6),
    phoneNumber3 = phone_numbers.number.slice(6, 10)
  }

  return {
    shouldContact: shouldContact,
    emailAddress: emailAddress,
    phoneNumber1: phoneNumber1,
    phoneNumber2: phoneNumber2,
    phoneNumber3: phoneNumber3
  };
}

module.exports = contactMethods;