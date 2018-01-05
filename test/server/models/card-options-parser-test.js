'use strict';

const assert            = require('assert');
const cardOptionsParser = require('../../../server/models/parsers/card-options-parser');
const dataHelper        = require('../../support/data-helper');

describe('cardOptionsParser', function() {
  let data          = dataHelper.fakeRecords();
  let cards         = [{ id: 1, application_id: '1', type: 'ID' }, { id: 2, application_id: '1', type: 'DL' }];
  let card_options  = [{ type: 'DL', option_type: 'action', option_value: 'new' }, { type: 'ID', option_type: 'action', option_value: 'renew' }, { type: 'DL', option_type: 'modification', option_value: 'real-id' }, { type: 'ID', option_type: 'modification', option_value: 'senior-id' }];
  let parser        = cardOptionsParser.cardOptions(cards, card_options, data);

  describe('cardOptions', function() {
    describe('card.type equals card_options.type', function() {
      it('creates a card option with the card id, option_type and option_value', function() {
        assert.equal(parser[0].card_id, 1)
        assert.equal(parser[0].option_type, 'action')
        assert.equal(parser[0].option_value, 'renew')
        assert.equal(parser[1].card_id, 1)
        assert.equal(parser[1].option_type, 'modification')
        assert.equal(parser[1].option_value, 'senior-id')
        assert.equal(parser[2].card_id, 2)
        assert.equal(parser[2].option_type, 'action')
        assert.equal(parser[2].option_value, 'new')
        assert.equal(parser[3].card_id, 2)
        assert.equal(parser[3].option_type, 'modification')
        assert.equal(parser[3].option_value, 'real-id')
      });
    });

    describe('licenseClasses', function() {
      it('assigns selected license classes to the dl', function() {
        assert.equal(data.license_classes[0].card_id, 2)
        assert.equal(data.license_classes[1].card_id, 2)
        assert.equal(data.license_classes[2].card_id, 2)
      });
    });
  });
});


