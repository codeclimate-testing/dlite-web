exports.up = function(db, Promise) {
  return db.schema.table('veterans_info', function(table) {
    table.boolean('military_waiver');
  });
};

exports.down = function(db, Promise) {
  return db.schema.table('veterans_info', function(table) {
    table.dropColumn('military_waiver');
  });
};
