
exports.up = function(db, Promise) {
  return Promise.all([

    db.schema.createTable('license_classes', function (table) {
      table.increments('id').primary();
      table.integer('card_id');
      table.string('type');
    })
  ]);
};

exports.down = function(db, Promise) {
  return Promise.all([
    db.schema.dropTable('license_classes')
  ]);
};
