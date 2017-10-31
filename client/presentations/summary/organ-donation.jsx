'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const OrganDonation = (props) => {
  if (!dataPresent.organDonation(props.organDonation)) { return null; }

  if (props.organDonation.donate && props.organDonation.contribute) {
    return (
      <div className='summary-section'>
      <p> Donate Organs: {props.organDonation.donate} </p>
      <p> Voluntary Contribution: {props.organDonation.contribute} </p>
      </div>
    );
  } else if (props.organDonation.donate) {
    return (
      <div className='summary-section'>
      <p> Donate Organs: {props.organDonation.donate} </p>
      </div>
    );
  } else if (props.organDonation.contribute) {
    return (
      <div className='summary-section'>
      <p> Voluntary Contribution: {props.organDonation.contribute} </p>
      </div>
    );
  };
};

export default OrganDonation;
