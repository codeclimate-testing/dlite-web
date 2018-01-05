'use strict';

import React from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';
import { getDL }            from '../../../helpers/data/card-type';

const driversLicense = 'Drivers License';
let cardType = 'ID';

const VeteransPreviousDesignation = (props) => {
  if(props.veteransService.isVeteran !== 'Yes' || props.cardAction !== 'renew') { return null; }

  if(getDL(props)) {
    cardType = driversLicense;
  } else {
    cardType;
  }

  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  return (
    <div className='veterans-previous-designation-form'>
      <h4>Is "Veteran" printed on your {cardType}?</h4>
      <div className='input-container'>
        <RadioCollection 
          {...props}
          name='previouslyDesignated'
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
  );
};

export default VeteransPreviousDesignation;
