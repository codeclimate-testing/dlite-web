'use strict';

import React                  from 'react';
import RadioSelector          from '../../radio-selector.jsx';
import RadioCollection        from '../../radio-selector-collection.jsx';
import OtherParty             from './other-party.jsx';
import translations           from '../../../i18n';
import Translation            from '../../../i18n/translate-tag.jsx';

const PoliticalPartyPreference = (props) => {
  if(props.politicalPartyChoose.isSelected !== 'Yes') { return null; }
  let locale = props.locale;
  return (
    <div className='political-party-preference'>
      <hr/>
      <Translation tag='h2' className='question'>
        {translations[locale].votingRegistration.choosePartyPage.choosePrompt}
      </Translation>

      <fieldset>
        <RadioCollection
          {...props}
          name='politicalPartyChoose'
        >
          <RadioSelector
            value='American Independent Party'
            text={translations[locale].votingRegistration.choosePartyPage.answerAmericanIndependent}
          />
          <RadioSelector
            value='Democratic Party'
            text={translations[locale].votingRegistration.choosePartyPage.answerDemocraticParty}
          />
          <RadioSelector
            value='Green Party'
            text={translations[locale].votingRegistration.choosePartyPage.answerGreenParty}
          />
          <RadioSelector
            value='Libertarian Party'
            text={translations[locale].votingRegistration.choosePartyPage.answerLibertarianParty}
          />
          <RadioSelector
            value='Peace and Freedom Party'
            text={translations[locale].votingRegistration.choosePartyPage.answerPeaceAndFreedomParty}
          />
          <RadioSelector
            value='Republican Party'
            text={translations[locale].votingRegistration.choosePartyPage.answerRepublicanParty}
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
