'use strict';


exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('applications', function (table) {
      table.string('id').primary();
      table.string('type');
      table.string('source');
      table.integer('number');
      table.string('first_name');
      table.string('middle_name');
      table.string('last_name');
      table.string('name_suffix');
      table.date('date_of_birth');
      table.string('language');
      table.string('hair_color');
      table.string('eye_color');
      table.dateTime('created_at').defaultTo(knex.fn.now());
      table.dateTime('updated_at').defaultTo(knex.fn.now());
    }),

    knex.schema.createTable('addresses', function (table) {
      table.increments('id').primary();
      table.string('resident_id');
      table.string('type');
      table.string('street_address_1');
      table.string('street_address_2');
      table.string('city');
      table.string('state');
      table.string('zip');
    }),

    knex.schema.createTable('emails', function (table) {
      table.increments('id').primary();
      table.string('resident_id');
      table.string('address');
      table.dateTime('deleted_at');
    }),

    knex.schema.createTable('phone_numbers', function (table) {
      table.increments('id').primary();
      table.string('resident_id');
      table.string('number');
      table.dateTime('deleted_at');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('applications'),
    knex.schema.dropTable('addresses'),
    knex.schema.dropTable('emails'),
    knex.schema.dropTable('phone_numbers')
  ])
};
