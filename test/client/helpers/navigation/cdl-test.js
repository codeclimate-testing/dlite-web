'use strict';

const assert = require('assert');

import {
  cdlWdywtdt,
  cdlCurrentCard
} from '../../../../client/helpers/navigation/cdl/next-path';

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
      assert.equal(cdlCurrentCard(props), 'cdlResidency');
    });

    it('returns "cdlChanges" if user is changing a card', function() {
      props.cardAction = 'change';
      assert.equal(cdlCurrentCard(props), 'cdlChanges');
    });
  });

});