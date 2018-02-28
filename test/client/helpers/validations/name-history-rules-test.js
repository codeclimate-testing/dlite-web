'use strict';

import assert from 'assert';

import rules from '../../../../client/helpers/validations/names-history-rules';
import messages from '../../../../client/presentations/error-messages';

describe('Names history page validation rules:', function() {
  it('when there are no data issues, it has no errors', function() {
    let props = {
      hasUsedPreviousNames: 'Yes',
      previousNames: 'Lorna',
      locale: 'en'
    };

    assert.deepEqual(rules.hasUsedPreviousNames(props), []);
    assert.deepEqual(rules.previousNames(props), []);
  });

  it('when no selection has been made, nameHistorySelectionMissing error appears', function() {
    let props = {
      hasUsedPreviousNames: '',
      locale: 'en'
    };

    assert.deepEqual(rules.hasUsedPreviousNames(props), [messages.nameHistorySelectionMissing]);
  });

  it('when no previous name has been entered, the nameHistorySelectionMissing error shows', function() {
    let props = {
      hasUsedPreviousNames: 'Yes',
      previousNames: '',
      locale: 'en'
    };

    assert.deepEqual(rules.hasUsedPreviousNames(props), []);
    assert.deepEqual(rules.previousNames(props), [messages.nameHistorySelectionMissing]);
  });

  it('when non-English characters are used, the inputIncludesNonEnglishCharacters error shows', function() {
    let props = {
      hasUsedPreviousNames: 'Yes',
      previousNames: 'François',
      locale: 'en'
    };

    assert.deepEqual(rules.hasUsedPreviousNames(props), []);
    assert.deepEqual(rules.previousNames(props), [messages.inputIncludesNonEnglishCharacters]);
  });
});

