'use strict';

const assert            = require('assert');
const generator         = require('../../../../server/models/parsers/card-options');
const dataHelper        = require('../../../support/data-helper');

describe('cardOptionsGenerator', function() {

  let cards         = [{ id: 1, application_id: '1', type: 'ID' },
                       { id: 2, application_id: '1', type: 'DL' }];

  let data_card_options  = [{ type: 'DL', option_type: 'action', option_value: 'new' },
                            { type: 'ID', option_type: 'action', option_value: 'renew' },
                            { type: 'DL', option_type: 'modification', option_value: 'real-id' },
                            { type: 'ID', option_type: 'modification', option_value: 'senior-id' }];

  let card_options = generator.cardOptionsGenerator(cards, data_card_options);
  it('creates a card option with the card id, option_type and option_value', function() {
    assert.equal(card_options[0].card_id, 1)
    assert.equal(card_options[0].option_type, 'action')
    assert.equal(card_options[0].option_value, 'renew')
    assert.equal(card_options[1].card_id, 1)
    assert.equal(card_options[1].option_type, 'modification')
    assert.equal(card_options[1].option_value, 'senior-id')
    assert.equal(card_options[2].card_id, 2)
    assert.equal(card_options[2].option_type, 'action')
    assert.equal(card_options[2].option_value, 'new')
    assert.equal(card_options[3].card_id, 2)
    assert.equal(card_options[3].option_type, 'modification')
    assert.equal(card_options[3].option_value, 'real-id')
  });
});

describe('licenseClassGenerator', function() {

  let cards         = [{ id: 1, application_id: '1', type: 'ID' },
                       { id: 2, application_id: '1', type: 'DL' }];

  let data_license_classes  = [{ type: 'firefighter'},
                              { type: 'classC' },
                              { type: 'classM'},
                              { type: 'classA' }];

  let license_classes = generator.licenseClassGenerator(cards, data_license_classes);
  it('creates a license class with the card id and type', function() {
    assert.equal(license_classes[0].card_id, 2)
    assert.equal(license_classes[0].type, 'firefighter')
    assert.equal(license_classes[1].card_id, 2)
    assert.equal(license_classes[1].type, 'classC')
    assert.equal(license_classes[2].card_id, 2)
    assert.equal(license_classes[2].type, 'classM')
    assert.equal(license_classes[3].card_id, 2)
    assert.equal(license_classes[3].type, 'classA')
  });
});

