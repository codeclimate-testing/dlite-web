'use strict';

import React from "react";

const SummaryAddressBlob = (props) => {
  return (
    <div>
      <p>Street Address: {props.address.street_1}</p>
      <p>Apartment or Unit Number (optional): {props.address.street_2}</p>
      <p>City: {props.address.city}</p>
      <p>State: {props.address.state}</p>
      <p>Zipcode: {props.address.zip}</p>
    </div>
  );
}

export const SummaryHomeAddress = (props) => {
  return (
    <div className='summary-section'>
      <p>Home address: </p>
        <SummaryAddressBlob address={ props.homeAddress }/>
    </div>
  );
};

export const SummaryMailingAddress = (props) => {
  return (
    <div className='summary-section'>
      <p>Mailing address: </p>
        <SummaryAddressBlob address={ props.mailingAddress }/>
    </div>
  );
};

export const SummaryContactDetails = (props) => {
  return (
    <div className='summary-section'>
      <p>Email: {props.contactDetails.emailAddress}</p>
      <p>Phone: {props.contactDetails.phoneNumber}</p>
    </div>
  );
};
