'use strict';

import React                  from 'react';
import RadioSelector          from '../../radio-selector.jsx';
import RadioCollection        from '../../radio-selector-collection.jsx';
import OtherParty             from './other-party.jsx';
import translations           from '../../../i18n';

const PoliticalPartyPreference = (props) => {
  if(props.politicalPartyChoose.isSelected !== 'Yes') { return null; }

  return (
    <div className='political-party-preference'>
      <hr/>
      <h2 className='question'>{translations.votingRegistration.choosePartyPage.choosePrompt}</h2>

      <fieldset>
        <RadioCollection
          {...props}
          name='politicalPartyChoose'
        >
          <RadioSelector
            value='American Independent Party'
            text={translations.votingRegistration.choosePartyPage.answerAmericanIndependent}
          />
          <RadioSelector
            value='Libertarian Party'
            text={translations.votingRegistration.choosePartyPage.answerLibertarianParty}
          />
          <RadioSelector
            value='Democratic Party'
            text={translations.votingRegistration.choosePartyPage.answerDemocracticParty}
          />
          <RadioSelector
            value='Green Party'
            text={translations.votingRegistration.choosePartyPage.answerGreenParty}
          />
          <RadioSelector
            value='Peace and Freedom Party'
            text={translations.votingRegistration.choosePartyPage.answerPeaceAndFreedomParty}
          />
          <RadioSelector
            value='Republican Party'
            text={translations.votingRegistration.choosePartyPage.answerRepublicanParty}
          />
          <OtherParty
            {...props}
            key='otherParty'
          />
        </RadioCollection>
      </fieldset>
    </div>
  );
};

export default PoliticalPartyPreference;
