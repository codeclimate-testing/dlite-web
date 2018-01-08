'use strict';

import React from 'react';

import RadioCollection      from '../../radio-selector-collection.jsx';
import RadioSelector        from '../../radio-selector.jsx';
import { hasMultipleCards } from '../../../helpers/data/cards';
import { getDL }            from '../../../helpers/data/card-type';

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

const values = {
  Yes: 'Yes',
  No: 'No'
};

const FormSection = (props) => {
  return (
    <div className='real-id-form'>
      <h2 className='question'>{ headerText(props) }</h2>
      <p>
        As of October 1, 2020, you will need a federally compliant driver license or ID card to fly
        <b> within</b> the United States.
      </p>

      <div className='row inner-bottom'>
        <RadioCollection
          {...props}
          name='getRealID'
          text={values}
        >
          <RadioSelector
            value='Yes'
          />

          <RadioSelector
            value='No'
          />
        </RadioCollection>

      </div>
    </div>
  )
};

export default FormSection;
