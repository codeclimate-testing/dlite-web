'use strict';

exports.up = function(db, Promise) {
  return db.schema.table('applications', function(table) {
    table.specificType('ip_address', 'inet');
  });
};

exports.down = function(db, Promise) {
  return db.schema.table('applications', function(table) {
    table.dropColumn('ip_address');
  });
};