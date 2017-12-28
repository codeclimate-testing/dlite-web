
exports.up = function(db, Promise) {
  return Promise.all([

    db.schema.createTable('renewal_card', function (table) {
      table.string('application_id');
      table.string('number');
      table.string('date');
    })
  ]);
};

exports.down = function(db, Promise) {
  return Promise.all([
    db.schema.dropTable('renewal_card')
  ]);
};
