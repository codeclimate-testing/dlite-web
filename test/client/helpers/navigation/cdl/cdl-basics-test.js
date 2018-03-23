'use strict';

const assert = require('assert');

import {
  cdlSSN
} from '../../../../../client/helpers/navigation/cdl/basics/next-path';

describe('CDL my-basics next-paths', function() {
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


    describe('#cdlSSN', function() {
      it('returns "cdlCurrentDL" if user is getting a new card', function() {
        assert.equal(cdlSSN(props), 'cdlCurrentDL');
      });
      it('returns "cdlRealID" if user is replacing, renewing, or changing a card', function() {
        props.cardAction = 'renew';
        assert.equal(cdlSSN(props), 'cdlRealID');
      });
    });
  });

  describe('#edit flow', function() {
    beforeEach(function() {
      props.flow = 'edit';
      props.classM = '';
    });

    describe('#cdlSSN', function() {
      it('returns "cdlSummary" ', function() {
        assert.equal(cdlSSN(props), 'cdlSummary');
      });
    });
  });
});
