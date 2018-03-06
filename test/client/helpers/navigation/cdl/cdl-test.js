'use strict';

const assert = require('assert');

import {
  cdlWdywtdt,
  cdlCurrentCard,
  cdlSSN,
  cdlCertification
} from '../../../../../client/helpers/navigation/cdl/get-started/next-path';

describe('CDL next-paths', function() {
  let props;
  beforeEach(function() {
    props = {
      cardAction: 'new'
    };
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

  describe('#cdlCurrentCare', function() {
    it('returns "cdlResidency" if user is renewing a card', function() {
      props.cardAction = 'renew';
      assert.equal(cdlCurrentCard(props), 'cdlResidency');
    });

    it('returns "cdlResidency" if user is replacing a card', function() {
      props.cardAction = 'replace';
      assert.equal(cdlCurrentCard(props), 'cdlCardReplacement');
    });

    it('returns "cdlChanges" if user is changing a card', function() {
      props.cardAction = 'change';
      assert.equal(cdlCurrentCard(props), 'cdlChanges');
    });
  });

  describe('#cdlSSN', function() {
    it('returns "cdlCurrentDL" if user is getting a new card', function() {
      assert.equal(cdlSSN(props), 'cdlCurrentDL');
    });
    it('returns "cdlRealID" if user is replacing, renewing, or changing a card', function() {
      props.cardAction = 'renew';
      assert.equal(cdlSSN(props), 'cdlRealID');
    });
  });

  describe('#cdlCertification', function() {
    it('returns "motorcycle" if user is getting a new card', function() {
      let props = {
        cardAction: 'new'
      };
      assert.equal(cdlCertification(props), 'motorcycle');
    });
    it('returns "cdlSummary" if user is replacing, renewing, or changing a card', function() {
      let props = {
        cardAction: 'replace'
      };
      assert.equal(cdlCertification(props), 'cdlSummary');
    });
  });

});
