'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/veterans-rules';

let props;

describe('veterans page validation rules:', function() {
  beforeEach(function() {
    let veteransService = {
      isVeteran: '',
      receiveBenefits: '',
      previouslyDesignated: '',
      veteransIdentifier: ''
    };

    props = {
      veteransService,
      cardAction: 'renew'
    }
  });

  it('give veteranSelectionMissing error when nothing is selected', function() {
    assert.deepEqual(rules.isVeteran(props), ['errorMessages.veteranSelectionMissing']);
  });


  describe('when not a veteran', function() {
    it('returns no error', function() {
      props.veteransService.isVeteran = 'No';

      assert.deepEqual(rules.isVeteran(props), []);
    });
  });

  describe('when user is a veteran', function() {
    it('returns veteranBenefitSelectionMissing error when benefits not selected', function() {
      props.veteransService = {
        isVeteran: 'Yes',
        receiveBenefits: '',
        previouslyDesignated: '',
        veteransIdentifier: ''
      }

      assert.deepEqual(rules.receiveBenefits(props), ['errorMessages.veteranBenefitSelectionMissing']);
    });

    it('returns selectionMissing error when benefits not selected', function() {
      props.veteransService = {
        isVeteran: 'Yes',
        militaryWaiver: ''
      }

      assert.deepEqual(rules.militaryWaiver(props), ['errorMessages.selectionMissing']);
    });

    it('returns veteranDesignationExistsMissing2 error when renewing and previous designation is not selected', function() {
      props.veteransService = {
        isVeteran: 'Yes',
        receiveBenefits: 'Yes',
        previouslyDesignated: '',
        veteransIdentifier: ''
      }

      assert.deepEqual(rules.veteransDesignation(props), ['errorMessages.veteranDesignationExistsMissing2']);
    });

    it('returns wantVeteransDesignationSelectionMissing error when not renewing', function() {
      props.veteransService = {
        isVeteran: 'Yes',
        receiveBenefits: 'Yes',
        previouslyDesignated: '',
        veteransIdentifier: ''
      }
      props.cardAction = 'replace';

      assert.deepEqual(rules.veteransIdentifier(props), ['errorMessages.wantVeteransDesignationSelectionMissing']);
    });

    it('returns keepVeteranDesignationSelectionMissing if previouslyDesignated', function() {
      props.veteransService = {
        isVeteran: 'Yes',
        receiveBenefits: 'Yes',
        previouslyDesignated: 'Yes',
        veteransIdentifier: ''
      }

      assert.deepEqual(rules.veteransIdentifier(props), ['errorMessages.keepVeteranDesignationSelectionMissing']);
    });

    it('returns wantVeteranDesignationSelectionMissing if not previouslyDesignated', function() {
      props.veteransService = {
        isVeteran: 'Yes',
        receiveBenefits: 'Yes',
        previouslyDesignated: 'No',
        veteransIdentifier: ''
      }

      assert.deepEqual(rules.veteransIdentifier(props), ['errorMessages.wantVeteransDesignationSelectionMissing']);
    });
  });
});

