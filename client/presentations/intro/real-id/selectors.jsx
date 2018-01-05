'use strict';

import React from 'react';

import RadioCollection      from '../../radio-selector-collection.jsx';
import RadioSelector        from '../../radio-selector.jsx';
import { hasMultipleCards } from '../../../helpers/data/cards';
import { getDL }            from '../../../helpers/data/card-type';

const DLHeader = (props) => {
  return <h4>Do you plan on using your Driver License to fly?</h4>;
}

const IDHeader = (props) => {
  return <h4>Do you plan on using your ID to fly?</h4>;
}

const MultiCardHeader = (props) => {
  return <h4>Do you plan on using one of your cards to fly?</h4>;
};

const Header = (props) => {
  const multiCard = hasMultipleCards(props);
  if (multiCard)     { return <MultiCardHeader {...props} />; }
  if (getDL(props))  { return <DLHeader {...props} />; }
  return <IDHeader {...props} />;
};

const FormSection = (props) => {

  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  return (
    <div className='real-id-form'>
      <Header {...props} />

      <h5>
        As of October 1, 2020, you will need a federally compliant driver license or ID card to fly
        <b> within</b> the United States.
      </h5>

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
