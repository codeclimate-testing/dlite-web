'use strict';

import React from 'react';
import * as dataPresent from '../../../helpers/data-present';

const OrganDonation = (props) => {
  if (!dataPresent.organDonation(props.organDonation)) { return null; }

  if (props.organDonation.donateOrgan && props.organDonation.donateMoney) {
    return (
      <div className='summary-section'>
      <p> Donate Organs: {props.organDonation.donateOrgan} </p>
      <p> Voluntary Contribution: {props.organDonation.donateMoney} </p>
      </div>
    );
  } else if (props.organDonation.donateOrgan) {
    return (
      <div className='summary-section'>
      <p> Donate Organs: {props.organDonation.donateOrgan} </p>
      </div>
    );
  } else if (props.organDonation.donateMoney) {
    return (
      <div className='summary-section'>
      <p> Voluntary Contribution: {props.organDonation.donateMoney} </p>
      </div>
    );
  };
};

export default OrganDonation;
