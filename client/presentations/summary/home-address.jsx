'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const HomeAddress = (props) => {
  if (!dataPresent.address(props.homeAddress)) { return null; }

  return (
    <div className='summary-section'>
      <p>Home address: </p>
      <p>Street Address: {props.homeAddress.street_1}</p>
      <p>Apartment or Unit Number (optional): {props.homeAddress.street_2}</p>
      <p>City: {props.homeAddress.city}</p>
      <p>State: {props.homeAddress.state}</p>
      <p>Zipcode: {props.homeAddress.zip}</p>
      <p>Home and Mailing Same: {props.homeAddress.homeAddressSameAsMailing}</p>
    </div>
  );
};

export default HomeAddress;
