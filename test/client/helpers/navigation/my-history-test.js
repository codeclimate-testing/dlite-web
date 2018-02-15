'use strict';

const assert = require('assert');

import {
  medicalHistory,
  nameHistory
} from '../../../../client/helpers/navigation/my-history/next-path';


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

describe('Data helpers for determining next path from current page and props in my-history section', function() {
  let data;
  beforeEach(function() {
    data = buildCardType('', '');
  });

  describe('#myHistory section', function() {
    describe('#medicalHistory', function() {
      it('goes to cardHistory if user is getting a new DL', function() {
        data = buildCardType('DL', 'new');

        assert.equal(medicalHistory(data), 'cardHistory');
      });

      it('goes to nameHistory, skipping cardHistory, if user is changing an existing DL', function() {
        data = buildCardType('DL', 'replace');

        assert.equal(medicalHistory(data), 'nameHistory');
      });

      it('goes to nameHistory, skipping cardHistory, if user is getting a new ID', function() {
        data = buildCardType('ID', 'new');
        assert.equal(medicalHistory(data), 'nameHistory');
      });
    });

    describe('#nameHistory', function() {
      it('goes to licenseIssues if user is getting a new DL', function() {
        data = buildCardType('DL', 'new');
        assert.equal(nameHistory(data), 'licenseIssues');
      });

      it('goes to licenseIssues page if user is getting a DL that is not new', function() {
        data = buildCardType('DL', 'change');
        assert.equal(nameHistory(data), 'licenseIssues');
      });

      it('goes to veterans page if user is getting an ID', function() {
        data = buildCardType('ID', 'new');
        assert.equal(nameHistory(data), 'veterans');
      });
    });
  });

});

