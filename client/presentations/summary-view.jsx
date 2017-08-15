'use strict';

import React from "react";

export const SummaryEmpty = (props) => {
  return (
    <div className='summary-section'>
      <p>No information has been entered yet</p>
    </div>
  );
}

export const SummaryNames = (props) => {
  return (
    <div className='summary-section'>
      <p> First Name: {props.legalName.firstName} </p>
      <p> Middle Name: {props.legalName.middleName} </p>
      <p> Last Name: {props.legalName.lastName} </p>
    </div>
  );
}

export const SummaryResidenceAddress = (props) => {
  return (
    <div className='summary-section'>
      <p>Street: {props.residenceAddress.street}</p>
      <p>City: {props.residenceAddress.city}</p>
      <p>State: {props.residenceAddress.state}</p>
      <p>Zipcode: {props.residenceAddress.zip}</p>
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
