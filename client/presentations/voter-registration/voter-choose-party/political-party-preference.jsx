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
          <RadioSelector value = 'American Independent Party'>
            <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerAmericanIndependent'/>
          </RadioSelector>

          <RadioSelector value = 'Democratic Party'>
            <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerDemocraticParty'/>
          </RadioSelector>

          <RadioSelector value = 'Green Party' >
            <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerGreenParty'/>
          </RadioSelector>

          <RadioSelector value = 'Libertarian Party' >
            <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerLibertarianParty'/>
          </RadioSelector>

          <RadioSelector value = 'Peace and Freedom Party' >
            <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerPeaceAndFreedomParty'/>
          </RadioSelector>

          <RadioSelector value = 'Republican Party' >
            <Translator tag='span' translationPath='votingRegistration.choosePartyPage.answerRepublicanParty'/>
          </RadioSelector>

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
