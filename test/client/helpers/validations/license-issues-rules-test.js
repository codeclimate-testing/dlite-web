'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/license-issues-rules';
import messages from '../../../../client/presentations/error-messages';

describe('License issues rules:', function() {
  it('when there are no data issues, it has no errors', function() {
    let props = {
      isSuspended: 'Yes',
      reason: 'a good one',
      month: '09',
      day: '29',
      year: '2010'
    };
    assert.deepEqual(rules.isSuspended(props), []);
    assert.deepEqual(rules.reason(props), []);
    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), []);
  });

  it('it lets the user proceed with only a partial date', function() {
    let props = {
      isSuspended: 'Yes',
      reason: 'a good one',
      month: '09',
      day: '',
      year: '2010'
    };

    assert.deepEqual(rules.isSuspended(props), []);
    assert.deepEqual(rules.reason(props), []);
    assert.deepEqual(rules.month(props), []);
    assert.deepEqual(rules.day(props), []);
    assert.deepEqual(rules.year(props), []);
  });

  it('gives the selectionMissing error if user doesn\'t choose a radio button', function() {
    let props = {
      isSuspended: ''
    };

    assert.deepEqual(rules.isSuspended(props), ['errorMessages.selectionMissing']);
  });

  it('gives the licenseIssueSelectionMissing error if user doesn\'t give a reason', function() {
    let props = {
      isSuspended: 'Yes',
      reason: ''
    };

    assert.deepEqual(rules.reason(props), ['errorMessages.licenseIssueSelectionMissing']);
  });

  it('gives the inputIncludesNonEnglishCharacters error if user types in non-English characters', function() {
    let props = {
      isSuspended: 'Yes',
      reason: 'chciałabym iść do kina samochodem ale piałam ża duźo piwo'
    };

    assert.deepEqual(rules.reason(props), ['errorMessages.inputIncludesNonEnglishCharacters']);
  });

  it('gives the invalidOrMissingDate error if date entry is not valid', function() {
    let props = {
      isSuspended: 'Yes',
      reason: 'something',
      month: '40',
      day: '',
      year: ''
    };
    assert.deepEqual(rules.month(props), ['errorMessages.invalidOrMissingDate']);
    assert.deepEqual(rules.year(props), []);
  });
});

