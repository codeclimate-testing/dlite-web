'use strict';

import React from 'react';

import RadioCollection        from '../../radio-selector-collection.jsx';
import radioYesNoGroup        from '../../radio-yes-no-group.jsx';

import { hasMultipleCards }   from '../../../helpers/data/cards';
import { mustChooseCard }     from '../../../helpers/data/real-id';
import { getDL }              from '../../../helpers/data/card-type';

const headerTexts = {
  DL: 'Do you plan on using your Driver License to fly?',
  ID: 'Do you plan on using your ID to fly?',
  both: 'Do you plan on using one of your cards to fly?'
};

const headerText = (props) => {
  const multiCard = hasMultipleCards(props);
  if (multiCard)     { return headerTexts.both; }
  if (getDL(props))  { return headerTexts.DL; }
  return headerTexts.ID;
};

const ChooseRealID = (props) => {
  return (
    <div className='real-id-form'>
      <h2 className='question'>{ headerText(props) }</h2>

      <p>
        As of October 1, 2020, you will need a federally compliant driver license or ID card to fly
        <b> within</b> the United States.
      </p>

      <div className='row'>
        <RadioCollection
          {...props}
          name          = 'getRealID'
          errorMessage  = { props.validations.realID() }
        >
          { radioYesNoGroup() }
        </RadioCollection>

      </div>
    </div>
  )
};

export default ChooseRealID;
