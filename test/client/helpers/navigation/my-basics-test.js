'use strict';

const assert = require('assert');

import {
  socialSecurity
} from '../../../../client/helpers/navigation/my-basics/next-path';

const today = new Date();
const bothCards = {
  cardAction: 'new',
  cardType: ['ID', 'DL'],
  IDApp: {
    isApplying: true,
    action: 'new',
    reducedFee: {
      ID: ''
    }
  },
  DLApp: {
    isApplying: true,
    action: 'new'
  },
  dateOfBirth: {
    year: (today.getFullYear() - 40).toString(),
    month: (today.getMonth()).toString(),
    day: today.getDate().toString()
  }
};

function buildCardType(type, action){
  let state = {
    cardType: [type],
    cardAction: action,
    IDApp: {
      isApplying: false,
      action: ''
    },
    DLApp: {
      isApplying: false,
      action: ''
    },
    dateOfBirth: {
      year: (today.getFullYear() - 40).toString(),
      month: (today.getMonth()).toString(),
      day: today.getDate().toString()
    }
  };
  if (type === 'DL') {
    state.DLApp.isApplying = true;
    state.DLApp.action = action;
  }
  if (type === 'ID') {
    state.IDApp.isApplying = true;
    state.IDApp.action = action;
  }
  return state;
};

const seniorYear = (today) => {
  return (today.getFullYear() - 65).toString()
};

describe('Data helpers for determining next path from current page and props in my-basics section', function() {
  let data;
  beforeEach(function() {
    data = buildCardType('', '');
    data.dateOfBirth = {
      year: (today.getFullYear() - 40).toString(),
      month: (today.getMonth()).toString(),
      day: today.getDate().toString()
    };
  });

  describe('#myBasics section', function() {
    describe('#socialSecurity', function() {
      it('goes to medicalHistory page if user is replacing a DL', function() {
        data = buildCardType('DL', 'replace');
        assert.equal(socialSecurity(data), 'medicalHistory');
      });

      it('goes to medicalHistory page if user is getting a new DL', function() {
        data = buildCardType('DL', 'new');
        assert.equal(socialSecurity(data), 'medicalHistory');
      });

      it('goes to cardHistory, skipping medicalHistory, if user is getting a new ID', function() {
        data = buildCardType('ID', 'new');
        assert.equal(socialSecurity(data), 'cardHistory');
      });

      it('goes to nameHistory, skipping medicalHistory and cardHistory, if user is replacing an ID', function() {
        data = buildCardType('ID', 'replace');
        assert.equal(socialSecurity(data), 'nameHistory');
      });
    });
  });
});

