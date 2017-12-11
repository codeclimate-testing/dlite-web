
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('card_options', function(table) {
    table.integer('card_id').alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('card_options', function(table) {
    table.string('card_id').alter();
  });
};
