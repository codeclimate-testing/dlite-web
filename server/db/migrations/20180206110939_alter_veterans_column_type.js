exports.up = function(knex, Promise) {
  return knex.schema.alterTable('veterans_info', function(table) {
    table.boolean('previously_designated').alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('veterans_info', function(table) {
    table.string('previously_designated').alter();
  });
};
