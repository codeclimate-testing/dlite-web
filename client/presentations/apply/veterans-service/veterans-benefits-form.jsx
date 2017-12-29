'use strict';

import React from 'react';

import HomeLink               from '../../home-link.jsx';
import SelectorCollection     from '../../selector-collection.jsx';

const VeteransBenefits = (props) => {
  if(props.veteransService.isVeteran !== 'Yes') { return null; }
  return (
    <div className='veterans-benefits-form'>
      <div className='veteran-thank-you-message'>
        <h5>Thank you for your service, {props.legalName.firstName}.</h5>
      </div>
      <h4>Would you like to receive benefits information for which you may be eligible?</h4>
      <div className='input-container'>
        <SelectorCollection
          name='receiveBenefits'
          values={['Yes', 'No']}
          onChange={ props.onChange }
          selectedValue={props.selectedValue}
        />
      </div>
    </div>
  );
};

export default VeteransBenefits;
