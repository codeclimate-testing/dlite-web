'use strict';

exports.up = function(db, Promise) {
  return db.schema.table('applications', function(table) {
      table.dateTime('completed_at');
  });
};

exports.down = function(db, Promise) {
  return db.schema.table('applications', function(table) {
      table.dropColumn('completed_at');
  });
};
