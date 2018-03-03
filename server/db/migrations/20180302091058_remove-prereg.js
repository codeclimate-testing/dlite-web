
exports.up = function(db, Promise) {
  return db.schema.table('voting_registrations', function(table) {
    table.dropColumn('is_preregistering');
  });
};

exports.down = function(db, Promise) {
  return db.schema.table('voting_registrations', function(table) {
    table.boolean('is_preregistering');
  });
};
