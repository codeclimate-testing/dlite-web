'use strict';

exports.up = function(db, Promise) {
  return db.schema.table('applications', function(table) {
      table.string('app_mode');
  });
};

exports.down = function(db, Promise) {
  return db.schema.table('applications', function(table) {
      table.dropColumn('app_mode');
  });
};
