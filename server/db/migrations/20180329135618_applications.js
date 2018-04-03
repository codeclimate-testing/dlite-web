'use strict';

exports.up = function(db, Promise) {
  return db.schema.alterTable('applications', function(table) {
    table.string('user_id').alter();
  });
};

exports.down = function(db, Promise) {
  return db.schema.alterTable('applications', function(table) {
    table.integer('user_id').alter();
  });
};
