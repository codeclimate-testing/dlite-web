exports.up = function(db, Promise) {
  return db.schema.table('renewal_card', function(table) {
    table.increments('id').primary();
  });
};

exports.down = function(db, Promise) {
  return db.schema.table('renewal_card', function(table) {
    table.dropColumns('id');
  });
};
