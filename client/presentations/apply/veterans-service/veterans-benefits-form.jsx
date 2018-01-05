'use strict';

import React from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const VeteransBenefits = (props) => {
  if(props.veteransService.isVeteran !== 'Yes') { return null; }
  let values = {
    Yes: 'Yes',
    No: 'No'
  };
  return (
    <div className='veterans-benefits-form'>
      <div className='veteran-thank-you-message'>
        <h5>Thank you for your service, {props.legalName.firstName}.</h5>
      </div>
      <h4>Would you like to receive benefits information for which you may be eligible?</h4>
      <div className='input-container'>
        <RadioCollection 
          {...props}
          name='receiveBenefits'
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

export default VeteransBenefits;
