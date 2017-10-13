'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const ContactChoice = (props) => {
  let value = props.contactChoice;

  if(value ==='Skip Question') {
    value = '';
  }

  if (!dataPresent.value(value)) { return null; }

  return (
    <div className='summary-section'>
      <p> Contact Choice: {value} </p>
    </div>
  );
};

export default ContactChoice;
