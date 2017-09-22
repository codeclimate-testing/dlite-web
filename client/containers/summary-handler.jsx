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
  SummaryDateOfBirth,
  SummarySex,
  SummaryHeight,
  SummaryWeight
} from '../presentations/summary-view.jsx';

import * as dataPresent from '../helpers/data-present';

// Not sure what is going to happen with this, since it seems to
// be moving to the SOS only area ... holding on refactoring until then.
const hasContactDetailsEntered = (props) => {
  return props.emailAddress || props.phoneNumber;
};

const SummaryHandler = (props) => {
  let contents = [];

  if (dataPresent.legalName(props.legalName)) {
    contents.push(<SummaryNames legalName={props.legalName} key='names'/>);
  }

  if (dataPresent.address(props.residenceAddress)) {
    contents.push(<SummaryResidenceAddress residenceAddress={props.residenceAddress} key='residenceAddress'/>);
  }

  if (dataPresent.address(props.mailingAddress)) {
    contents.push(<SummaryMailingAddress mailingAddress={props.mailingAddress} key='mailingAddress'/>);
  }

  if (dataPresent.value(props.sex)) {
    contents.push(<SummarySex key='sex' sex={props.sex}/>);
  }

  if (dataPresent.value(props.eyeColor.eyeColor)) {
    contents.push(<SummaryEyeColor eyeColor={props.eyeColor} key='eyeColor'/>);
  }

  if (dataPresent.value(props.hairColor.hairColor)) {
    contents.push(<SummaryHairColor hairColor={props.hairColor} key='hairColor'/>);
  }

  if (dataPresent.date(props.dateOfBirth)) {
    contents.push(<SummaryDateOfBirth dateOfBirth={props.dateOfBirth} key='dateOfBirth'/>);
  }

  if (hasContactDetailsEntered(props.contactDetails)) {
    contents.push(<SummaryContactDetails contactDetails={props.contactDetails} key='contactDetails'/>);
  }

  if (dataPresent.height(props.height)) {
    contents.push(<SummaryHeight height={props.height} key='height'/>);
  }

  if (dataPresent.value(props.weight)) {
    contents.push(<SummaryWeight weight={props.weight} key='weight'/>);
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
  return state.application;
}

export default connect(mapStateToProps)(SummaryHandler);
