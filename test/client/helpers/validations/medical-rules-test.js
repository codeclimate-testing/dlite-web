'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/medical-rules';
import messages from '../../../../client/presentations/error-messages';

let props;

describe('Medical history page validation rules:', function() {
  beforeEach(function() {
    props = {
      hasMedicalCondition: '',
      medicalInfo: '',
      locale: 'en'
    };
  });
  it('when nothing has been selected it will give selectionMissing error', function() {
    assert.deepEqual(rules.hasMedicalCondition(props), [messages.selectionMissing]);
    assert.deepEqual(rules.medicalInfo(props), []);
  });

  it('when "No" is selected it will not give an error', function() {
    props.hasMedicalCondition = 'No';

    assert.deepEqual(rules.hasMedicalCondition(props), []);
    assert.deepEqual(rules.medicalInfo(props), []);
  });

  it('when "Yes" is selected but no text has been entered it will give medicalHistorySelectionMissing error', function() {
    props.hasMedicalCondition = 'Yes';
    assert.deepEqual(rules.hasMedicalCondition(props), []);
    assert.deepEqual(rules.medicalInfo(props), [messages.medicalHistorySelectionMissing]);
  });

  it('when "Yes" is selected and non-English text has been entered it will give inputIncludesNonEnglishCharacters error', function() {
    props.hasMedicalCondition = 'Yes';
    props.medicalInfo = 'już nie boli mnie dobrze';
    assert.deepEqual(rules.hasMedicalCondition(props), []);
    assert.deepEqual(rules.medicalInfo(props), [messages.inputIncludesNonEnglishCharacters]);
  });
});

