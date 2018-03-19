'use strict';

import React                  from 'react';
import RadioSelector          from '../../radio-selector.jsx';
import RadioCollection        from '../../radio-selector-collection.jsx';
import OtherParty             from './other-party.jsx';
import Translator             from '../../../i18n/translator-tag.jsx';

const PoliticalPartyPreference = (props) => {
  if(props.politicalPartyChoose.isSelected !== 'Yes') { return null; }
  return (
    <div className='political-party-preference'>
      <hr/>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'votingRegistration.choosePartyPage.choosePrompt'
      />

      <fieldset role='group' aria-label='Political party'>
        <RadioCollection
          {...props}
          name='politicalPartyChoose'
        >
          <RadioSelector
            value = 'American Independent Party'
            text  = { <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerAmericanIndependent'/> }
          />
          <RadioSelector
            value = 'Democratic Party'
            text  = { <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerDemocraticParty'/> }
          />
          <RadioSelector
            value = 'Green Party'
            text  = { <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerGreenParty'/> }
          />
          <RadioSelector
            value = 'Libertarian Party'
            text  = { <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerLibertarianParty'/> }
          />
          <RadioSelector
            value = 'Peace and Freedom Party'
            text  = { <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerPeaceAndFreedomParty'/> }
          />
          <RadioSelector
            value = 'Republican Party'
            text  = { <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerRepublicanParty'/> }
          />
          <OtherParty
            {...props}
            key = 'otherParty'
          />
        </RadioCollection>
      </fieldset>
    </div>
  );
};

export default PoliticalPartyPreference;
