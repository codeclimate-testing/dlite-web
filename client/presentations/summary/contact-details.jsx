'use strict';

import React              from 'react';
import * as dataPresent   from '../../helpers/data-present';

const ContactDetails = (props) => {
  if (!dataPresent.contactDetails(props.contactDetails)) { return null; }

  return (
    <div className='summary-section'>
      <p> Email Address: {props.contactDetails.emailAddress} </p>
      <p> phone Number: {props.contactDetails.phoneNumber} </p>
    </div>
  );
};

export default ContactDetails;
