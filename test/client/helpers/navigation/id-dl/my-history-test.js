'use strict';

const assert = require('assert');

import {
  medicalHistory,
  nameHistory,
  cardHistory
} from '../../../../../client/helpers/navigation/id-dl/my-history/next-path';


let state = () => {
  return  {
    cardType: [],
    cardAction: '',
    DLApp: {
      isApplying: false,
      action: ''
    },
    licenseAndIdHistory: {
      DLIDNumber: ''
    },
    flow: ''
  };
};

const ID = ['ID'];
const DL = ['DL'];
const both = ['ID', 'DL'];

describe('Data helpers for determining next path from current page and props in my-history section', function() {
  let data;
  beforeEach(function() {
    data = state();
  });

  describe('#regular flow', function() {
    describe('##medicalHistory', function() {
      it('goes to cardHistory if user is getting a new DL', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        data.DLApp.action = 'new';
        data.DLApp.isApplying = true;
        assert.equal(medicalHistory(data), 'cardHistory');
      });

      it('goes to nameHistory, skipping cardHistory, if user is changing an existing DL', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        assert.equal(medicalHistory(data), 'nameHistory');
      });

      it('goes to nameHistory, skipping cardHistory, if user is getting a new ID', function() {
        data.cardType = ID;
        data.cardAction = 'new';
        assert.equal(medicalHistory(data), 'nameHistory');
      });
    });

    describe('##nameHistory', function() {
      it('goes to licenseIssues if user is getting a new DL', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        assert.equal(nameHistory(data), 'licenseIssues');
      });

      it('goes to licenseIssues page if user is getting a DL that is not new', function() {
        data.cardType = DL;
        data.cardAction = 'change';
        assert.equal(nameHistory(data), 'licenseIssues');
      });

      it('goes to veterans page if user is getting an ID', function() {
        data.cardType = ID;
        data.cardAction = 'new';
        assert.equal(nameHistory(data), 'veterans');
      });
    });

    describe('##cardHistory', function() {
      it('user getting a DL goes to nameHistory', function() {
        data.cardType = DL;
        assert.equal(cardHistory(data), 'nameHistory');
      });
    });
  });

  describe('#adding', function() {
    beforeEach(function() {
      data.flow = 'add';
    });
    describe('##medicalHistory', function() {
      it('user replacing, renewing, or changing card goes to licenseIssues', function() {
        data.cardAction = 'replace';
        assert.equal(medicalHistory(data), 'licenseIssues');
      });
      it('user getting a new card goes to cardHistory', function() {
        data.cardAction = 'new';
        assert.equal(medicalHistory(data), 'cardHistory');
      });
      it('user getting a new card who has already entered cardHistory goes to summary', function() {
        data.cardAction = 'new';
        data.licenseAndIdHistory.DLIDNumber = '111';
        assert.equal(medicalHistory(data), 'summary');
      });
    });

    describe('##nameHistory', function() {
      it('goes to summary', function() {
        assert.equal(nameHistory(data), 'summary');
      });
    });

    describe('##cardHistory', function() {
      it('user adding a DL goes to issueHistory', function() {
        data.cardType = DL;
        assert.equal(cardHistory(data), 'licenseIssues');
      });
    })
  });

  describe('#editing', function() {
    beforeEach(function() {
      data.flow = 'edit';
    });

    describe('##medicalHistory', function() {
      it('goes to the summary', function() {
        assert.equal(medicalHistory(data), 'summary');
      });
    });

    describe('##nameHistory', function() {
      it('goes to the summary', function() {
        assert.equal(nameHistory(data), 'summary');
      });
    });
  });
});

