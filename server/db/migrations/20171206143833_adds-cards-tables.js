
exports.up = function(db, Promise) {
  return Promise.all([
    db.schema.createTable('cards', function (table) {
      table.increments('id').primary();
      table.string('application_id');
      table.string('type');
    }),
    db.schema.createTable('card_options', function (table) {
      table.increments('id').primary();
      table.string('card_id');
      table.string('option_type');
      table.string('option_value');
    })
  ]);
};

exports.down = function(db, Promise) {
  return Promise.all([
    db.schema.dropTable('cards'),
    db.schema.dropTable('card_options'),
  ]);
};
