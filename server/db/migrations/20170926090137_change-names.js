'use strict';

exports.up = function(db, Promise) {
  return Promise.all([
    db.schema.table('applications', function(table) {
      table.dropColumns('type', 'source', 'number', 'name_suffix');
    }),
    db.schema.table('addresses', function(table) {
      table.renameColumn('resident_id', 'application_id')
    }),
    db.schema.table('emails', function(table) {
      table.renameColumn('resident_id', 'application_id')
    }),
    db.schema.table('phone_numbers', function(table) {
      table.renameColumn('resident_id', 'application_id')
    })
  ]);
};

exports.down = function(db, Promise) {
  return Promise.all([
    db.schema.table('applications', function(table) {
      table.string('type');
      table.string('source');
      table.integer('number');
      table.string('name_suffix');
    }),
    db.schema.table('addresses', function(table) {
      table.renameColumn('application_id', 'resident_id')
    }),
    db.schema.table('emails', function(table) {
      table.renameColumn('application_id', 'resident_id')
    }),
    db.schema.table('phone_numbers', function(table) {
      table.renameColumn('application_id', 'resident_id')
    }),
  ]);
};
