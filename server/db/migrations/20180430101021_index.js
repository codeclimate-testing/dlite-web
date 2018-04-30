'use strict';

exports.up = function(db, Promise) {
  return Promise.all([
    db.schema.table('applications', (table) => {
      table.index('id');
    }),
    db.schema.table('addresses', (table) => {
      table.index(['application_id', 'type'], 'addresses_index');
    }),
    db.schema.table('emails', (table) => {
      table.index('application_id');
    }),
    db.schema.table('phone_numbers', (table) => {
      table.index('application_id');
    }),
    db.schema.table('veterans_info', (table) => {
      table.index('application_id');
    }),
    db.schema.table('voting_registrations', (table) => {
      table.index('application_id');
    }),
    db.schema.table('organ_donations', (table) => {
      table.index('application_id');
    }),
    db.schema.table('card_histories', (table) => {
      table.index('application_id'); // not unique
    }),
    db.schema.table('previous_names', (table) => {
      table.index('application_id'); // not unique
    }),
    db.schema.table('medical_histories', (table) => {
      table.index('application_id');
    }),
    db.schema.table('license_issues', (table) => {
      table.index('application_id');
    }),
    db.schema.table('cards', (table) => {
      table.index(['application_id', 'type'], 'card_index');
    }),
    db.schema.table('card_options', (table) => {
      table.index(['card_id', 'option_type', 'option_value'], 'card_options_index');
    }),
    db.schema.table('guardian_signatures', (table) => {
      table.index(['application_id', 'guardian_type'], 'guardian_index');
    }),
    db.schema.table('guardian_addresses', (table) => {
      table.index(['guardian_id', 'guardian_type'], 'guardian_address_index');
    })
  ]);
};

exports.down = function(db, Promise) {
  return Promise.all([
    db.schema.table('applications', (table) => {
      table.dropIndex('id');
    }),
    db.schema.table('addresses', (table) => {
      table.dropIndex('application_id', ['addresses_index']);
    }),
    db.schema.table('emails', (table) => {
      table.dropIndex('application_id');
    }),
    db.schema.table('phone_numbers', (table) => {
      table.dropIndex('application_id');
    }),
    db.schema.table('veterans_info', (table) => {
      table.dropIndex('application_id');
    }),
    db.schema.table('voting_registrations', (table) => {
      table.dropIndex('application_id');
    }),
    db.schema.table('organ_donations', (table) => {
      table.dropIndex('application_id');
    }),
    db.schema.table('card_histories', (table) => {
      table.dropIndex('application_id');
    }),
    db.schema.table('previous_names', (table) => {
      table.dropIndex('application_id');
    }),
    db.schema.table('medical_histories', (table) => {
      table.dropIndex('application_id');
    }),
    db.schema.table('license_issues', (table) => {
      table.dropIndex('application_id');
    }),
    db.schema.table('cards', (table) => {
      table.dropIndex(['application_id', 'type'], 'card_index');
    }),
    db.schema.table('card_options', (table) => {
      table.dropIndex(['card_id', 'option_type', 'option_value'], 'card_options_index');
    }),
    db.schema.table('guardian_signatures', (table) => {
      table.dropIndex(['application_id', 'guardian_type'], 'guardian_index');
    }),
    db.schema.table('guardian_addresses', (table) => {
      table.dropIndex(['guardian_id', 'guardian_type'], 'guardian_address_index');
    })
  ]);
};
