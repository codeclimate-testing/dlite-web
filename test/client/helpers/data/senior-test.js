'use strict';

const assert = require('assert');

import {
  eligibleForSeniorID
} from '../../../../client/helpers/data/senior';

describe('Data helpers for senior', function() {
  it('#eligibleForSeniorID should be false if under 62', function() {
    let today = new Date();

    let data = {
      dateOfBirth: {
        year: (today.getFullYear() - 61).toString(),
        month: (today.getMonth()).toString(),
        day: today.getDate().toString()
      },
      cardType: {
        IDDL: ['ID'],
        cardAction: 'new'
      }
    };
    assert.equal(eligibleForSeniorID(data), false);
  });

  it('#eligibleForSeniorID should be false if over 62, but not getting an ID', function() {
    let today = new Date();

    let data = {
      dateOfBirth: {
        year: (today.getFullYear() - 63).toString(),
        month: (today.getMonth()).toString(),
        day: today.getDate().toString()
      },
      cardType: {
        IDDL: ['DL'],
        cardAction: 'new'
      }
    };
    assert.equal(eligibleForSeniorID(data), false);
  });

  it('#eligibleForSeniorID should be true if over 62, and getting an ID', function() {
    let today = new Date();

    let data = {
      dateOfBirth: {
        year: (today.getFullYear() - 63).toString(),
        month: (today.getMonth()).toString(),
        day: today.getDate().toString()
      },
      cardType: {
        IDDL: ['ID'],
        cardAction: 'new'
      }
    };
    assert.equal(eligibleForSeniorID(data), true);
  });
});
