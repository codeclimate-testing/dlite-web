'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const PoliticalContact = (props) => {

  let shouldContact = props.politicalContact.shouldContact;
  if (!dataPresent.value(shouldContact)) { return null; }

  if(shouldContact !== 'Yes') {
    if(shouldContact === 'Skip Question') { shouldContact = 'No Answer'; }
    return (
      <div className='summary-section'>
        <p> Should Contact: {shouldContact} </p>
      </div>
    );
  }

    return (
      <div className='summary-section'>
        <p> Should Contact: {shouldContact} </p>
        <p> Email Address: {props.politicalContact.emailAddress} </p>
        <p> phone Number: {props.politicalContact.phoneNumber} </p>
      </div>
    );

};

export default PoliticalContact;