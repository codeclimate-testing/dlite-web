'use strict';

import assert from 'assert';
import rules from '../../../../client/helpers/validations/names-history-rules';

describe('Names history page validation rules:', function() {
  it('when there are no data issues, it has no errors', function() {
    let props = {
      hasUsedPreviousNames: 'Yes',
      previousNames: 'Lorna'
    };

    assert.deepEqual(rules.hasUsedPreviousNames(props), []);
    assert.deepEqual(rules.previousNames(props), []);
  });

  it('when no selection has been made, nameHistorySelectionMissing error appears', function() {
    let props = {
      hasUsedPreviousNames: ''
    };

    assert.deepEqual(rules.hasUsedPreviousNames(props), ['errorMessages.nameHistorySelectionMissing']);
  });

  it('when no previous name has been entered, the nameHistorySelectionMissing error shows', function() {
    let props = {
      hasUsedPreviousNames: 'Yes',
      previousNames: ''
    };

    assert.deepEqual(rules.hasUsedPreviousNames(props), []);
    assert.deepEqual(rules.previousNames(props), ['errorMessages.nameHistorySelectionMissing']);
  });

  it('when non-English characters are used, the inputIncludesNonEnglishCharacters error shows', function() {
    let props = {
      hasUsedPreviousNames: 'Yes',
      previousNames: 'François'
    };

    assert.deepEqual(rules.hasUsedPreviousNames(props), []);
    assert.deepEqual(rules.previousNames(props), ['errorMessages.inputIncludesNonEnglishCharacters']);
  });
});

