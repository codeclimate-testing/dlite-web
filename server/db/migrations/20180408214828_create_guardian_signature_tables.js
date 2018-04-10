'use strict';

exports.up = function(db, Promise) {
  return Promise.all([
    db.schema.createTable('guardian_signatures', function (table) {
      table.increments('id').primary();
      table.string('application_id');
      table.string('guardian_type');
      table.boolean('accept_civil_liability');
      table.string('guardian_name');
      table.date('signed_on');
      table.string('phone_number');
    }),
    db.schema.createTable('guardian_addresses', function (table) {
      table.increments('id').primary();
      table.string('guardian_id');
      table.string('guardian_type');
      table.string('street_address_1');
      table.string('street_address_2');
      table.string('city');
      table.string('state');
      table.string('zip');
    })
  ]);
};

exports.down = function(db, Promise) {
  return Promise.all([
    db.schema.dropTable('guardian_signatures'),
    db.schema.dropTable('guardian_addresses')
  ]);
};
