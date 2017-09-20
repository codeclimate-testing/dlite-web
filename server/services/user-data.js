'user strict'

const knex = require('../db/connect')();

const APPLICATIONS_TABLE_COLUMNS = ['id', 'type', 'source', 'number','first_name','middle_name','last_name','name_suffix',
'date_of_birth','language','hair_color','eye_color'];
const ADDRESSES_TABLE_COLUMNS = ['resident_id', 'type as addressType', 'street_address_1', 'street_address_2','city', 'state', 'zip'];
const EMAILS_TABLE_COLUMNS = ['resident_id', 'address as email_address'];
const PHONE_NUMBERS_TABLE_COLUMNS = ['resident_id', 'number as phone_number'];

module.exports.insertApplication = function(application) {

  return knex('applications')
    .insert({
      id: application.uuid,
      type: application.type,
      source: application.source,
      number: application.number,
      first_name: application.first_name,
      middle_name: application.middle_name,
      last_name: application.last_name,
      name_suffix: application.name_suffix,
      date_of_birth: application.date_of_birth,
      language: application.language,
      hair_color: application.hair_color,
      eye_color: application.eye_color
    });
}

module.exports.insertAddress = function(address) {

  return knex('addresses')
    .insert({
      resident_id: address.uuid,
      type: address.addressType,
      street_address_1: address.street_address_1,
      street_address_2: address.street_address_2,
      city: address.city,
      state: address.state,
      zip: address.zip
    });
}

module.exports.insertEmail = function(email) {

  return knex('emails')
    .insert({
      resident_id: email.uuid,
      address: email.email_address
    });
}

module.exports.insertPhoneNumber = function(phoneNumber) {

  return knex('phone_numbers')
    .insert({
      resident_id: phoneNumber.uuid,
      number: phoneNumber.phone_number
    });
}

module.exports.selectFromApplication = function(residentID) {
  return knex('applications').where('id', residentID);
}

module.exports.selectFromAddress = function(residentID) {
  return knex('addresses').where('resident_id', residentID);
}

module.exports.selectFromEmail = function(residentID) {
  return knex('emails').where('resident_id', residentID);
}

module.exports.selectFromPhoneNumber = function(residentID) {
  return knex('phone_numbers').where('resident_id', residentID);
}

module.exports.selectFromAllTables = function(residentID) {

  return knex('applications')
    .join('addresses', 'applications.id', 'addresses.resident_id')
    .join('emails', 'emails.resident_id', 'applications.id')
    .join('phone_numbers', 'phone_numbers.resident_id', 'applications.id')
    .select(...APPLICATIONS_TABLE_COLUMNS.map((d) => { return 'applications.' + d }),
    ...ADDRESSES_TABLE_COLUMNS.map((d) => { return 'addresses.' + d }),
    ...EMAILS_TABLE_COLUMNS.map((d) => { return 'emails.' + d }),
    ...PHONE_NUMBERS_TABLE_COLUMNS.map((d) => { return 'phone_numbers.' + d }))
    .where('applications.id', residentID);
}