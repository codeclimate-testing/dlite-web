'use strict';

const assert = require('assert');

import {
  socialSecurity
} from '../../../../../client/helpers/navigation/id-dl/my-basics/next-path';

const today = new Date();

const state = () => {
  return {
    cardType: [],
    cardAction: '',
    IDApp: {
      isApplying: false,
      action: ''
    },
    dateOfBirth: {
      year: (today.getFullYear() - 40).toString(),
      month: (today.getMonth()).toString(),
      day: today.getDate().toString()
    },
    seniorID: '',
    flow: ''
  };
};
const seniorYear =  (today.getFullYear() - 65).toString();
const ID = ['ID'];
const DL = ['DL'];
const both = ['ID', 'DL'];

describe('Data helpers for determining next path from current page and props in my-basics section', function() {
  let data;
  beforeEach(function() {
    data = state();
  });

  describe('#myBasics section', function() {
    describe('#socialSecurity', function() {
      it('goes to medicalHistory page if user is replacing a DL', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        assert.equal(socialSecurity(data), 'medicalHistory');
      });

      it('goes to medicalHistory page if user is getting a new DL', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        assert.equal(socialSecurity(data), 'medicalHistory');
      });

      it('goes to cardHistory, skipping medicalHistory, if user is getting a new ID', function() {
        data.cardType = ID;
        data.cardAction = 'new';
        data.IDApp.action = 'new';
        assert.equal(socialSecurity(data), 'cardHistory');
      });

      it('goes to nameHistory, skipping medicalHistory and cardHistory, if user is replacing an ID', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        data.IDApp.action = 'replace';
        assert.equal(socialSecurity(data), 'nameHistory');
      });
    });
  });

  describe('#editing', function() {
    it('goes to summary', function() {
      data.flow = 'edit';
      assert.equal(socialSecurity(data), 'summary');
    });
  });
});

