'use strict';

const assert              = require('assert');
const extractCard         = require('../../../../../server/models/parsers/client-to-server-parsers/extract-card');

describe('extracting card info: previousCards and currentCards shared functions', function() {
  let history, array, card;
  const id = '010101';
  const number = '5555';

  beforeEach(function() {
    history = {
      issuedBy: '',
      isIssued: '',
      month: '',
      day: '',
      year: ''
    };
    card = {
      number: '',
      day: '',
      year: '',
      month: ''
    };
    array = [];
  });

  describe('#previousCards', function() {
    it('pushes data to array if user has indicated that a previous card is issued', function() {
      history = {
        isIssued: 'Yes',
        month: '10',
        day: '10',
        year: '2000'
      };
      assert.equal(extractCard.previousCards(id, history, number, array)[0].number, number);
    });

    it('pushes an object with string "licenseAndIdHistory not issued" to the array if previous card is not issued', function() {
      history.isIssued = 'No';
      assert.equal(extractCard.previousCards(id, history, number, array)[0].issuing_entity, 'licenseAndIdHistory not issued');
    });
  });

  describe('#currentCards', function() {
    it('pushes the card info to the array', function() {
      card.number = '3333';
      assert.equal(extractCard.currentCards(id, card, array)[0].number, card.number);
    });
  });
});
