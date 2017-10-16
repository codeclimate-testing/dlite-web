'use strict';

import React, {Component}         from 'react';
import { connect }                from 'react-redux';
import { Link }                   from 'react-router-dom';

import HomeLink                   from '../presentations/home-link.jsx';
import alicePath                  from '../helpers/alice-path';

import {
  LegalName,
  DateOfBirth,
  HomeAddress,
  MailingAddress,
  Sex,
  EyeColor,
  HairColor,
  Height,
  Weight,
  Organ,
  SocialSecurity,
  CitizenStatus,
  ContactChoice,
  BallotByMail,
  EligibilityRequirements,
  PoliticalPartyChoose,
  PoliticalPartyPreference,
  ContactDetails,
  BallotLanguage,
  ContinueButton,
  OptOut,
  Empty
} from '../presentations/summary/index.js';

const successVisit = '/about-me/success-visit';

const SummaryHandler = (props) => {
  let contents = [
    <LegalName legalName={props.legalName} key='legal-name' />,
    <DateOfBirth dateOfBirth={props.dateOfBirth} key='date-of-birth' />,
    <HomeAddress homeAddress={props.homeAddress} key='home-address' />,
    <MailingAddress mailingAddress={props.mailingAddress} key='mailing-address' />,
    <Sex sex={props.sex} key='sex' />,
    <EyeColor eyeColor={props.eyeColor} key='eye-color' />,
    <HairColor hairColor={props.hairColor} key='hair-color' />,
    <Height height={props.height} key='height' />,
    <Weight weight={props.weight} key='weight' />,
    <Organ organ={props.organ} key='organ' />,
    <SocialSecurity socialSecurity={props.socialSecurity} key='social-security' />,
    <CitizenStatus citizenStatus={props.citizenStatus} key='citizen-status' />,
    <ContactChoice contactChoice={props.contactChoice} key='contact-choice' />,
    <BallotByMail ballotByMail={props.ballotByMail} key='ballot-by-mail' />,
    <EligibilityRequirements eligibilityRequirements={props.eligibilityRequirements} key='eligibility-requirements' />,
    <PoliticalPartyChoose politicalPartyChoose={props.politicalPartyChoose} key='political-party-choose' />,
    <PoliticalPartyPreference politicalPartyPreference={props.politicalPartyPreference} key='political-party-preference' />,
    <ContactDetails contactDetails={props.contactDetails} key ='contact-details' />,
    <BallotLanguage ballotLanguage={props.ballotLanguage} key='ballot-language' />,
    <OptOut optOut={props.optOut} key='opt-out' />,
    <Empty {...props} key='empty' />,

    <div className='shadow-container'>
     <Link to={alicePath(linkAddress)} className='link-button button'>Continue</Link>
    </div>

  ];

  contents = contents.reduce((summaries, item) => {
    if (item.type) { summaries.push(item); }
    return summaries;
  }, []);


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
