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
      <p>Residential address: </p>
      <p>Street: {props.residenceAddress.residentialStreet}</p>
      <p>City: {props.residenceAddress.residentialCity}</p>
      <p>State: {props.residenceAddress.residentialState}</p>
      <p>Zipcode: {props.residenceAddress.residentialZip}</p>
    </div>
  );
};

export const SummaryMailingAddress = (props) => {
  return (
    <div className='summary-section'>
      <p>Mailing address: </p>
      <p>Street: {props.mailingAddress.mailingStreet}</p>
      <p>City: {props.mailingAddress.mailingCity}</p>
      <p>State: {props.mailingAddress.mailingState}</p>
      <p>Zipcode: {props.mailingAddress.mailingZip}</p>
    </div>
  );
};

export const SummaryHairColor = (props) => {
  return (
    <div className='summary-page'>
      <p> Hair Color: {props.hairColor.hairColor} </p>
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

export const SummaryEyeColor = (props) => {
  return (
    <div className='summary-section'>
      <p> Eye Color: {props.eyeColor.eyeColor} </p>
    </div>
  )
}
