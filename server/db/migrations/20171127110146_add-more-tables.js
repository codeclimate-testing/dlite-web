
exports.up = function(db, Promise) {
  return Promise.all([
    db.schema.table('applications', function(table) {
      table.string('suffix_name');
      table.integer('height_feet');
      table.integer('height_inches');
      table.integer('weight');
      table.string('sex');
      table.string('social_security_number');
    }),
    db.schema.createTable('organ_donations', function (table) {
      table.increments('id').primary();
      table.string('application_id');
      table.boolean('donating_organs');
      table.boolean('donating_money');
    }),
    db.schema.createTable('card_histories', function(table) {
      table.increments('id').primary();
      table.string('application_id');
      table.string('number');
      table.string('issuing_entity');
      table.string('date_description');
    }),
    db.schema.createTable('previous_names', function(table) {
      table.increments('id').primary();
      table.string('application_id');
      table.string('name');
    }),
    db.schema.createTable('medical_histories', function(table) {
      table.increments('id').primary();
      table.string('application_id');
      table.text('description');
    }),
    db.schema.createTable('license_issues', function(table) {
      table.increments('id').primary();
      table.string('application_id');
      table.text('description');
      table.string('date_description');
    }),
    db.schema.createTable('veterans_info', function(table) {
      table.increments('id').primary();
      table.string('application_id');
      table.boolean('has_requested_information');
      table.string('labeling');
    }),
    db.schema.createTable('voting_registrations', function(table) {
      table.increments('id').primary();
      table.string('application_id');
      table.boolean('is_citizen');
      table.boolean('is_eligible');
      table.string('type');
      table.boolean('opted_out');
      table.boolean('is_preregistering');
      table.string('party');
      table.string('language');
      table.boolean('vote_by_mail');
      table.boolean('should_contact');
    })
  ]);


};

exports.down = function(db, Promise) {
  return Promise.all([
    db.schema.table('applications', function(table) {
      table.dropColumns('suffix_name', 'height_feet', 'height_inches', 'weight', 'sex', 'social_security_number');
    }),
    db.schema.dropTable('organ_donations'),
    db.schema.dropTable('card_histories'),
    db.schema.dropTable('previous_names'),
    db.schema.dropTable('medical_histories'),
    db.schema.dropTable('license_issues'),
    db.schema.dropTable('veterans_info'),
    db.schema.dropTable('voting_registrations')
  ]);
};
