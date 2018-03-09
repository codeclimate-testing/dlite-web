'use strict';

exports.up = function(db, Promise) {
  return Promise.all([
    db.schema.table('applications', function(table) {
      table.integer('user_id');
      table.index('user_id');
    }),
    db.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('uuid');
      table.unique('uuid');
    })
  ]);
};

exports.down = function(db, Promise) {
  return Promise.all([
    db.schema.table('applications', function(table) {
      table.dropColumns('user_id');
      table.dropIndex('user_id')
    }),
    db.schema.dropTable('users')
  ]);
};
