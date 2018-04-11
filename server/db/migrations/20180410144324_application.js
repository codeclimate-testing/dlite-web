'use strict';

exports.up = function(db, Promise) {
  return db.schema.table('applications', function(table) {
    table.string('pathname');
  });
};

exports.down = function(db, Promise) {
  return db.schema.table('applications', function(table) {
    table.dropColumn('pathname');
  });
};
