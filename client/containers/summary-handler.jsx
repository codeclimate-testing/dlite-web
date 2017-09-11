'use strict';

import React, {Component} from 'react';
import { connect } from 'react-redux';

import HomeLink from '../presentations/home-link.jsx';
import {
  SummaryEmpty,
  SummaryNames,
  SummaryResidenceAddress,
  SummaryMailingAddress,
  SummaryContactDetails,
  SummaryEyeColor,
  SummaryHairColor,
  SummaryDateOfBirth
} from '../presentations/summary-view.jsx';

const hasNamesEntered = (props) => {
  return props.firstName || props.middleName || props.lastName;
};

const hasAddressEntered = (props) => {
  return props.street || props.city || props.zip;
};

const hasHairColorEntered = (props) => {
  return props.hairColor;
};

const hasContactDetailsEntered = (props) => {
  return props.emailAddress || props.phoneNumber;
};

const hasEyeColorEntered = (props) => {
  return props.eyeColor;
};

const hasDateOfBirth = (props) => {
  return props.month && props.day && props.year;
};

const SummaryHandler = (props) => {
  let contents = [];

  if (hasNamesEntered(props.legalName)) {
    contents.push(<SummaryNames legalName={props.legalName} key='names'/>);
  }

  if (hasAddressEntered(props.residenceAddress)) {
    contents.push(<SummaryResidenceAddress residenceAddress={props.residenceAddress} key='residenceAddress'/>);
  }

  if (hasAddressEntered(props.mailingAddress)) {
    contents.push(<SummaryMailingAddress mailingAddress={props.mailingAddress} key='mailingAddress'/>);
  }

  if (hasHairColorEntered(props.hairColor)) {
    contents.push(<SummaryHairColor hairColor={props.hairColor} key='hairColor'/>);
  }

  if (hasContactDetailsEntered(props.contactDetails)) {
    contents.push(<SummaryContactDetails contactDetails={props.contactDetails} key='contactDetails'/>);
  }

  if (hasEyeColorEntered(props.eyeColor)) {
    contents.push(<SummaryEyeColor eyeColor={props.eyeColor} key='eyeColor'/>);
  }

  if (hasDateOfBirth(props.dateOfBirth)) {
    contents.push(<SummaryDateOfBirth dateOfBirth={props.dateOfBirth} key='dateOfBirth'/>);
  }

  if (!contents.length) {
    contents.push(<SummaryEmpty key='summary'/>);
  }

  return (
    <div className='summary'>
      <HomeLink />
      { contents }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    legalName: state.legalName,
    residenceAddress: state.residenceAddress,
    mailingAddress: state.mailingAddress,
    contactDetails: state.contactDetails,
    eyeColor: state.eyeColor,
    hairColor: state.hairColor,
    dateOfBirth: state.dateOfBirth
  };
}

export default connect(mapStateToProps)(SummaryHandler);
