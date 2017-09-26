'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const MailingAddress = (props) => {
  if (!dataPresent.address(props.mailingAddress)) { return null; }

  return (
    <div className='summary-section'>
      <p>Mailing address: </p>
      <p>Street Address: {props.mailingAddress.street_1}</p>
      <p>Apartment or Unit Number (optional): {props.mailingAddress.street_2}</p>
      <p>City: {props.mailingAddress.city}</p>
      <p>State: {props.mailingAddress.state}</p>
      <p>Zipcode: {props.mailingAddress.zip}</p>
    </div>
  );
};

export default MailingAddress;
