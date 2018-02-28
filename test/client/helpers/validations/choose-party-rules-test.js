'use strict';

import assert     from 'assert';
import rule       from '../../../../client/helpers/validations/choose-party-rules';
import messages   from '../../../../client/presentations/error-messages';

describe('choose party rules:', function() {
  it('will give the choosePoliticalPartyNowSelectionMissing message when nothing is selected', function() {
    let props = {
      isSelected: '',
      locale: 'en'
    };

    assert.deepEqual(rule.isSelected(props), [messages.choosePoliticalPartyNowSelectionMissing]);
  });

  it('will give the politicalPartySelectionMissing message when no political party is chosen', function() {
    let props = {
      isSelected: 'Yes',
      politicalPartyChoose: '',
      locale: 'en'
    };
    assert.deepEqual(rule.politicalPartyChoose(props), [messages.politicalPartySelectionMissing]);
  });

  it('will give the inputIncludesNonEnglishCharacters error when other party text input includes non-English characters', function() {
    let props = {
      isSelected: 'Yes',
      politicalPartyChoose: 'Other',
      otherParty: 'Unia Europejskich Demokratów',
      locale: 'en'
    };
    assert.deepEqual(rule.otherParty(props), [messages.inputIncludesNonEnglishCharacters]);
  });
});