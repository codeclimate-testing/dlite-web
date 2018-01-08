'use strict';

import React, { Component }       from 'react';
import { connect }                from 'react-redux';
import { Link }                   from 'react-router-dom';

import HomeLink                   from '../presentations/home-link.jsx';
import alicePath                  from '../helpers/alice-path';
import navigateOnSubmit           from '../helpers/handlers/navigate-on-submit';
import { postData }               from '../actions/api-actions';
import { ageChecks }              from '../helpers/calculate-age';
import {
  getID,
  getDL
} from '../helpers/data/card-type';

import {
  LegalName,
  DateOfBirth,
  Cards,
  SeniorID,
  RealID,
  LicenseType,
  ReducedFee,
  HomeAddress,
  MailingAddress,
  TraitsHeightWeight,
  PhysicalTraits,
  OrganDonation,
  SocialSecurity,
  LicenseIssues,
  LicenseAndIdHistory,
  NamesHistory,
  MedicalHistory,
  VeteransService,
  CitizenStatus,
  BallotByMail,
  EligibilityRequirements,
  PoliticalPartyChoose,
  BallotLanguage,
  ContactMethods,
  GuardianSignature,
  ContinueButton,
  OptOut,
  Empty
} from '../presentations/summary/index.js';

const SummaryHandler = (props) => {

  let onSubmit = navigateOnSubmit('/appointment-preparation', props);

  let application = props.state;
  let contents = [

    <LegalName legalName={application.legalName} key='legal-name' />,
    <DateOfBirth dateOfBirth={application.dateOfBirth} key='date-of-birth' />,
    <Cards 
      cardType        = { application.cardType } 
      currentCardInfo = { application.currentCardInfo } 
      cardAction      = { application.cardAction }
      cardChanges     = { application.cardChanges }
      cardReplacement = { application.cardReplacement }
      key='card-type' 
    />,
    <HomeAddress homeAddress={application.homeAddress} key='home-address' />,
    <SeniorID seniorID={application.seniorID} key='senior-id' />,
    <RealID realID={application.realID} key='real-id' />,
    <LicenseType licenseType={application.licenseType} key='license-type' />,
    <ReducedFee reducedFee={application.reducedFee} key='reduced-fee' />,
    <MailingAddress mailingAddress={application.mailingAddress} key='mailing-address' />,
    <TraitsHeightWeight traitsHeightWeight={application.traitsHeightWeight} key='traits-height-weight' />,
    <PhysicalTraits physicalTraits={application.physicalTraits} key='physicalTraits' />,
    <OrganDonation organDonation={application.organDonation} key='organ-donation' />,
    <SocialSecurity socialSecurity={application.socialSecurity} key='social-security' />,
    <LicenseIssues licenseIssues={application.licenseIssues} key='license-issues' />,
    <LicenseAndIdHistory licenseAndIdHistory={application.licenseAndIdHistory} key='license-and-id-history' />,
    <NamesHistory namesHistory={application.namesHistory} key='names-history' />,
    <MedicalHistory medicalHistory={application.medicalHistory} key='medical-history' />,
    <VeteransService veteransService={application.veteransService} key='veterans-service' />,
    <CitizenStatus citizenStatus={application.citizenStatus} key='citizen-status' />,
    <BallotByMail ballotByMail={application.ballotByMail} key='ballot-by-mail' />,
    <EligibilityRequirements eligibilityRequirements={application.eligibilityRequirements} key='eligibility-requirements' />,
    <PoliticalPartyChoose politicalPartyChoose={application.politicalPartyChoose} key='choose-party' />,
    <BallotLanguage ballotLanguage={application.ballotLanguage} key='ballot-language' />,
    <ContactMethods contactMethods={application.contactMethods} key='contact-methods' />,
    <GuardianSignature guardianSignature={application.guardianSignature} key='guardian-signature' />,
    <OptOut optOut={application.optOut} key='opt-out' />,
    <Empty {...application} key='empty' />
  ];

  contents = contents.reduce((summaries, item) => {
    if (item.type) { summaries.push(item); }
    return summaries;
  }, []);

  if(APP_ENV && (APP_ENV === 'development' || APP_ENV === 'test')){
    contents.push(
        <div className='navigation-buttons row' key='save-and-continue'>
          <button type='submit' className='arrow-button forward'>
            Save & Continue
          </button>
        </div>
    );
  }
  else{
    contents.push(
        <ContinueButton disabled={props.continueDisabled} key="submit"/>
    );
  }

  let DLAlert = () => {
    return <h4 className='youth-license-notification'>
      If you go to the DMV office to finish your license application before you are 15.5 years old, you can only get a Junior permit. These permits are issued only in exceptional circumstances.
    </h4>
  }
  let IDAlert = (props) => {
    if(!getID(props)) { return null; }
    return (
      <h4 className='youth-license-notification'>
        You are eligible to complete your ID application in the office today.
      </h4>
    )
  }

  let Alerts = (props) => {
    if(!getDL(props) || ageChecks.GreaterThanEqual15Half(props.dateOfBirth)){ return null; }
    return (
      <div>
        <DLAlert/>
        <IDAlert
          cardType = {props.cardType}
        />
      </div>
    );
  };

  return (
    <div className='summary'>
      <HomeLink />
      <Alerts
        cardType    = {application.cardType}
        dateOfBirth = {application.dateOfBirth}
      />
      <form onSubmit={ onSubmit } >
        { contents }
      </form>
    </div>
  );
}

const  mapStateToProps = (state) => {
  return state;
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { application }   = stateProps;
  const { dispatch }      = dispatchProps;

  return Object.assign({}, ownProps, {
    state: application,
    onSubmit: () => {
      dispatch(postData(application));
    }
  });

};

export default connect(mapStateToProps, null, mergeProps)(SummaryHandler);
