'use strict';

import React, {Component}         from 'react';
import { connect }                from 'react-redux';
import { Link }                   from 'react-router-dom';

import HomeLink                   from '../presentations/home-link.jsx';
import alicePath                  from '../helpers/alice-path';
import {getData, postData}        from '../actions/api-actions';

import {
  LegalName,
  DateOfBirth,
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
  ContinueButton,
  OptOut,
  Empty
} from '../presentations/summary/index.js';

const appointmentPreparation = '/appointment-preparation';

const SummaryHandler = (props) => {
  let application = props.application;
  let contents = [

    <LegalName legalName={application.legalName} key='legal-name' />,
    <DateOfBirth dateOfBirth={application.dateOfBirth} key='date-of-birth' />,
    <HomeAddress homeAddress={application.homeAddress} key='home-address' />,
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
    <OptOut optOut={application.optOut} key='opt-out' />,
    <Empty {...application} key='empty' />,

    <Link to={ alicePath(appointmentPreparation) } key="link-to-appointment-preparation" >
      <ContinueButton disabled={props.continueDisabled} key="submit"/>
    </Link>
  ];

  contents = contents.reduce((summaries, item) => {
    if (item.type) { summaries.push(item); }
    return summaries;
  }, []);

  const loadData  = () => {
    props.dispatch(getData(application.id));
  };

  const saveData = () => {
    let data = application;
    props.dispatch(postData(data));
  }

  if(APP_ENV === 'development' || APP_ENV === 'test') {
    contents.push(
      <div key='save-reload-data'>
        <div className=' unit relative'>
          <button id='reloadData' key='reload-data' onClick={loadData}> Reload </button>
        </div>
        <div className='unit spacer'></div>
        <div className=' unit relative'>
          <button id='saveData' key='save-data' onClick={saveData}> Save </button>
        </div>
      </div>
    );
  }

  return (
    <div className='summary'>
      <HomeLink />
      { contents }
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SummaryHandler);
