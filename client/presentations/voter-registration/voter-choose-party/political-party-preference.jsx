'use strict';

import React                  from 'react';
import RadioSelector          from '../../radio-selector.jsx';
import RadioCollection        from '../../radio-selector-collection.jsx';
import OtherParty             from './other-party.jsx';
import translations           from '../../../i18n';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const PoliticalPartyPreference = (props) => {
  if(props.politicalPartyChoose.isSelected !== 'Yes') { return null; }

  return (
    <div className='political-party-preference'>
      <hr/>
      {convertToHtml('h2', translations.votingRegistration.choosePartyPage.choosePrompt, 'question')}

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
            text={translations.votingRegistration.choosePartyPage.answerDemocraticParty}
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
