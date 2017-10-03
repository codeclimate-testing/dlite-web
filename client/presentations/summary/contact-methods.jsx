'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const ContactMethods = (props) => {
  let value = props.contactMethods;

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-section'>
      <p> Contact Methods: {props.contactMethods} </p>
    </div>
  )
};

export default ContactMethods;
