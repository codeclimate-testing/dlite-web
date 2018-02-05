'use strict';

import React from 'react';

import RadioCollection        from '../../radio-selector-collection.jsx';
import radioYesNoGroup        from '../../radio-yes-no-group.jsx';

import { getCorrectString }   from '../../../helpers/data/card-type';

const headerTexts = {
  DL: 'Do you plan on using your Driver License to fly?',
  ID: 'Do you plan on using your ID to fly?',
  both: 'Do you plan on using one of your cards to fly?'
};

const ChooseRealID = (props) => {
  let headerText = getCorrectString(props, headerTexts.DL, headerTexts.ID, headerTexts.both);

  return (
    <div className='real-id-form'>
      <h2 className='question'>{ headerText }</h2>

      <p>
        As of October 1, 2020, you will need a federally compliant driver license or ID card to fly
        <b> within</b> the United States.
      </p>

      <div className='row'>
        <fieldset>
        <RadioCollection
          {...props}
          name          = 'getRealID'
          errorMessage  = { props.validations.realID() }
        >
          { radioYesNoGroup() }
        </RadioCollection>
        </fieldset>

      </div>
    </div>
  )
};

export default ChooseRealID;
