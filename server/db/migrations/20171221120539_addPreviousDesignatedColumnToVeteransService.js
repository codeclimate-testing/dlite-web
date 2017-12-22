
exports.up = function(knex, Promise) {
  return knex.schema.table('veterans_info', function(table) {
    table.string('previously_designated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('veterans_info', function(table) {
    table.dropColumn('previously_designated');
  });
};
