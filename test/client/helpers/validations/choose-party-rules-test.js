'use strict';

import assert     from 'assert';
import rule       from '../../../../client/helpers/validations/choose-party-rules';

describe('choose party rules:', function() {
  it('will give the choosePoliticalPartyNowSelectionMissing message when nothing is selected', function() {
    let props = {
      isSelected: ''
    };

    assert.deepEqual(rule.isSelected(props), ['errorMessages.choosePoliticalPartyNowSelectionMissing']);
  });

  it('will give the politicalPartySelectionMissing message when no political party is chosen', function() {
    let props = {
      isSelected: 'Yes',
      politicalPartyChoose: ''
    };
    assert.deepEqual(rule.politicalPartyChoose(props), ['errorMessages.politicalPartySelectionMissing']);
  });

  it('will give the inputIncludesNonEnglishCharacters error when other party text input includes non-English characters', function() {
    let props = {
      isSelected: 'Yes',
      politicalPartyChoose: 'Other',
      otherParty: 'Unia Europejskich Demokratów'
    };
    assert.deepEqual(rule.otherParty(props), ['errorMessages.inputIncludesNonEnglishCharacters']);
  });
});