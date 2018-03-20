'use strict';

const assert              = require('assert');
const extractCardOptions  = require('../../../../../server/models/parsers/client-to-server-parsers/extract-card-options');

describe('extracting card options', function() {
  const cardChanges = {
    correctOrUpdate: '',
    sections: [],
    other: ''
  };
  const cardReplacement = {
    reason: ''
  };
  const realID = '';

  describe('#IDDP app', function() {
    let data;
    beforeEach(function() {
      data = {
        IDApp: {
          isApplying: false,
          action: '',
          cardChanges,
          cardReplacement,
          realID,
          reducedFee: {
            ID: '',
            form: ''
          },
          seniorID: ''
        },
        DLApp: {
          isApplying: false,
          action: '',
          cardChanges,
          cardReplacement,
          realID
        }
      }
    });

    describe('##getting a DL', function() {
      beforeEach(function() {
        data.DLApp.isApplying = true;
      });
      it('pushes object with type "DL" when user is getting a DL', function() {
        assert.equal(extractCardOptions(data)[0].type, 'DL');
      });
      it('pushes object with option_value equal to the DLApp action', function() {
        data.DLApp.action = 'renew';
        assert.equal(extractCardOptions(data)[0].option_value, data.DLApp.action);
      });
      it('user correcting a DL has a card option object with option_value equal to "change-correct" and the sections joined together with underscores', function() {
        data.DLApp.action = 'change';
        data.DLApp.cardChanges.correctOrUpdate = 'correct';
        data.DLApp.cardChanges.sections = ['section1', 'section2'];
        assert.equal(extractCardOptions(data)[1].type, 'DL');
        assert.equal(extractCardOptions(data)[1].option_type, 'modification');
        assert.equal(extractCardOptions(data)[1].option_value, 'change-correct-section1_section2');
      });
      it('user replacing a DL has a card option object with option_value equal to "replace-" and the reason', function() {
        data.DLApp.action = 'replace';
        data.DLApp.cardReplacement.reason = 'some reason';
        assert.equal(extractCardOptions(data)[1].type, 'DL');
        assert.equal(extractCardOptions(data)[1].option_type, 'modification');
        assert.equal(extractCardOptions(data)[1].option_value, 'replace-some reason');
      });
      it('user getting a real ID has real-id modification', function() {
        data.DLApp.action = 'new';
        data.DLApp.realID = 'Yes';
        assert.equal(extractCardOptions(data)[1].option_value, 'real-id');
      });
    });

    describe('##getting an ID', function() {
      beforeEach(function() {
        data.IDApp.isApplying = true;
      });
      it('pushes object with type "ID" when user is getting an ID', function() {
        assert.equal(extractCardOptions(data)[0].type, 'ID');
      });
      it('pushes object with option_value equal to the IDApp action', function() {
        data.IDApp.action = 'change';
        assert.equal(extractCardOptions(data)[0].option_value, data.IDApp.action);
      });
      it('user correcting an ID has a card option object with option_value equal to "change-correct" and the sections joined together with underscores', function() {
        data.IDApp.action = 'change';
        data.IDApp.cardChanges.correctOrUpdate = 'update';
        data.IDApp.cardChanges.sections = ['section3', 'section8'];
        assert.equal(extractCardOptions(data)[1].type, 'ID');
        assert.equal(extractCardOptions(data)[1].option_type, 'modification');
        assert.equal(extractCardOptions(data)[1].option_value, 'change-update-section3_section8');
      });
      it('user replacing an ID has a card option object with option_value equal to "replace-" and the reason', function() {
        data.IDApp.action = 'replace';
        data.IDApp.cardReplacement.reason = 'some other reason';
        assert.equal(extractCardOptions(data)[1].type, 'ID');
        assert.equal(extractCardOptions(data)[1].option_type, 'modification');
        assert.equal(extractCardOptions(data)[1].option_value, 'replace-some other reason');
      });
      it('user getting a real ID has real-id modification', function() {
        data.IDApp.action = 'new';
        data.IDApp.realID = 'Yes';
        assert.equal(extractCardOptions(data)[1].option_value, 'real-id');
      });
      it('user getting a reduced fee has reduced-fee modification', function() {
        data.IDApp.reducedFee = {
          ID: 'Yes'
        };
        assert.equal(extractCardOptions(data)[1].option_value, 'reduced-fee');
      });
      it('user getting a senior ID has senior-id modification', function() {
        data.IDApp.seniorID = 'Yes';
        assert.equal(extractCardOptions(data)[1].option_value, 'senior-id');
      });
      it('user getting both cards has two objects with option_type equal to "action"', function() {
        data.DLApp.isApplying = true;
        data.DLApp.action = 'new';
        data.IDApp.action = 'new';
        assert.equal(extractCardOptions(data)[0].type, 'DL');
        assert.equal(extractCardOptions(data)[0].option_type, 'action');
        assert.equal(extractCardOptions(data)[1].type, 'ID');
        assert.equal(extractCardOptions(data)[0].option_type, 'action');
      });
    });
  });
  describe('#CDL app', function() {
    let data;
    beforeEach(function() {
      data = {
        cardAction: '',
        cardChanges,
        cardReplacement,
        realID
      }
    });
    it('pushes object with type "CDL" when user is getting a CDL', function() {
      assert.equal(extractCardOptions(data)[0].type, 'CDL');
    });
    it('pushes object with option_value equal to the cardaction', function() {
      data.cardAction = 'replace';
      assert.equal(extractCardOptions(data)[0].option_value, data.cardAction);
    });
    it('user correcting a CDL has a card option object with option_value equal to "change-correct" and the sections joined together with underscores', function() {
      data.cardAction = 'change';
      data.cardChanges.correctOrUpdate = 'update';
      data.cardChanges.sections = ['section3', 'section8'];
      assert.equal(extractCardOptions(data)[1].type, 'CDL');
      assert.equal(extractCardOptions(data)[1].option_type, 'modification');
      assert.equal(extractCardOptions(data)[1].option_value, 'change-update-section3_section8');
    });
    it('user replacing an ID has a card option object with option_value equal to "replace-" and the reason', function() {
      data.cardAction = 'replace';
      data.cardReplacement.reason = 'some other reason';
      assert.equal(extractCardOptions(data)[1].type, 'CDL');
      assert.equal(extractCardOptions(data)[1].option_type, 'modification');
      assert.equal(extractCardOptions(data)[1].option_value, 'replace-some other reason');
    });
    it('user getting a real ID has real-id modification', function() {
      data.cardAction = 'new';
      data.realID = 'Yes';
      assert.equal(extractCardOptions(data)[1].option_value, 'real-id');
    });
  });
});
