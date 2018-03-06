
exports.up = function(db, Promise) {
  return db.schema.alterTable('voting_registrations', function(table) {
    table.string('is_citizen').alter();
    table.string('is_eligible').alter();
  });
};

exports.down = function(db, Promise) {
  return db.schema.alterTable('voting_registrations', function(table) {
    table.boolean('is_citizen').alter();
    table.boolean('is_citizen').alter();
  });
};
