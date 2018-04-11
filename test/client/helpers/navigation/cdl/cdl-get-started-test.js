'use strict';

const assert = require('assert');

import {
  cdlIDme,
  cdlWdywtdt,
  cdlCurrentCard,
  changedCDL,
  cdlCurrentDL
} from '../../../../../client/helpers/navigation/cdl/get-started/next-path';

describe('CDL next-paths', function() {
  let props;
  beforeEach(function() {
    props = {
      cardAction: 'new',
      flow: '',
      currentCardInfo: {
        number: '',
        month: '',
        day: '',
        year: ''
      }
    };
  });
  describe('#initial flow', function() {
    describe('#cdlIDme', function() {
      beforeEach(function() {
        props.userData = {
          appsLength: '',
          userID: '',
          apps: [{
            cardType: [],
            cardAction: [],
            name: ''
          }]
        };
        props.appName = 'cdl';
      });

      it('goes to cdlLegalName if user does not have multiple apps', function() {
        props.userData.appsLength = 0;
        assert.ok(cdlIDme(props), 'cdlLegalName');
      });
      it('goes to openApplications if user has multiple apps', function() {
        props.userData.appsLength = 2;
        assert.ok(cdlIDme(props), 'openApplications');
      });
      it('goes to openApplications if user already has an app', function() {
        props.userData.appsLength = 1;
        assert.ok(cdlIDme(props), 'openApplications');
      });
    });

    describe('#cdlWdywtdt', function() {
      it('returns "cdlResidency" if user is getting a new card', function() {
        assert.equal(cdlWdywtdt(props), 'cdlResidency');
      });
      it('returns "cdlCurrentCard" if user is replacing card', function() {
        props.cardAction = 'replace';
        assert.equal(cdlWdywtdt(props), 'cdlCurrentCard');
      });
      it('returns "cdlCurrentCard" if user is renewing card', function() {
        props.cardAction = 'renew';
        assert.equal(cdlWdywtdt(props), 'cdlCurrentCard');
      });
      it('returns "cdlCurrentCard" if user is changing a card', function() {
        props.cardAction = 'change';
        assert.equal(cdlWdywtdt(props), 'cdlCurrentCard');
      });
    });

    describe('#cdlCurrentCard', function() {
      it('returns "cdlResidency" if user is renewing a card', function() {
        props.cardAction = 'renew';
        assert.equal(cdlCurrentCard(props), 'cdlResidency');
      });

      it('returns "cdlCardReplacement" if user is replacing a card', function() {
        props.cardAction = 'replace';
        assert.equal(cdlCurrentCard(props), 'cdlCardReplacement');
      });

      it('returns "cdlChanges" if user is changing a card', function() {
        props.cardAction = 'change';
        assert.equal(cdlCurrentCard(props), 'cdlChanges');
      });
    });

    describe('#changedCDL', function() {
      it('goes to cdlResidency', function() {
        assert.equal(changedCDL(props), 'cdlResidency');
      });
    });

    describe('#cdlCurrentDL', function() {
      it('returns cdlRealID', function() {
        assert.equal(cdlCurrentDL(props), 'cdlRealID');
      });
    });
  });

  describe('#edit flow', function() {
    beforeEach(function() {
      props.flow = 'edit';
      props.classM = '';
    });
    describe('#cdlWdywtdt', function() {
      it('returns "cdlCurrentCard" if user is replacing card and has not provided current card info', function() {
        props.cardAction = 'replace';
        assert.equal(cdlWdywtdt(props), 'cdlCurrentCard');
      });
      it('returns "cdlCurrentCard" if user is renewing card', function() {
        props.cardAction = 'renew';
        assert.equal(cdlWdywtdt(props), 'cdlCurrentCard');
      });
      it('returns "cdlCurrentCard" if user is changing a card and has not provided current card info', function() {
        props.cardAction = 'change';
        assert.equal(cdlWdywtdt(props), 'cdlCurrentCard');
      });
      it('returns "cdlChanges" if user is changing a card and has provided current card info', function() {
        props.cardAction = 'change';
        props.currentCardInfo.number = 'aaaa111';
        assert.equal(cdlWdywtdt(props), 'cdlChanges');
      });
      it('returns "cdlCardReplacement" if user is replacing a card and has provided current card info', function() {
        props.cardAction = 'replace';
        props.currentCardInfo.number = 'aaaa111';
        assert.equal(cdlWdywtdt(props), 'cdlCardReplacement');
      });
      it('returns "cdlCurrentDL" if user is editing a new card', function() {
        props.cardAction = 'new';
        assert.equal(cdlWdywtdt(props), 'cdlCurrentDL');
      });
    });

    describe('#cdlCurrentCard', function() {
      it('returns "cdlSummary" if user is renewing a card', function() {
        props.cardAction = 'renew';
        assert.equal(cdlCurrentCard(props), 'cdlSummary');
      });

      it('returns "cdlCardReplacement" if user is replacing a card', function() {
        props.cardAction = 'replace';
        assert.equal(cdlCurrentCard(props), 'cdlCardReplacement');
      });

      it('returns "cdlChanges" if user is changing a card', function() {
        props.cardAction = 'change';
        assert.equal(cdlCurrentCard(props), 'cdlChanges');
      });
    });

    describe('#changedCDL', function() {
      it('goes to cdlSummary', function() {
        assert.equal(changedCDL(props), 'cdlSummary');
      });
    });

    describe('#cdlCurrentDL', function() {
      it('goes to motorcycle if user has not entered that data', function() {
        assert.equal(cdlCurrentDL(props), 'motorcycle');
      });
      it('goes to cdlSummary if user has already entered motorcycle data', function() {
        props.classM = 'Yes';
        assert.equal(cdlCurrentDL(props), 'cdlSummary');
      });
    });
  });
});
