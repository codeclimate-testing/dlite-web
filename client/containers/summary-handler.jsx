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
  PrivilegeRemovedHistory,
  DlidHistory,
  NamesHistory,
  CitizenStatus,
  BallotByMail,
  EligibilityRequirements,
  PoliticalPartyChoose,
  BallotLanguage,
  PoliticalContact,
  ContinueButton,
  OptOut,
  Empty
} from '../presentations/summary/index.js';

const successVisit = '/about-me/success-visit';

const SummaryHandler = (props) => {
  let application = props.application;
  let contents = [
    <LegalName legalName={application.legalName} key='legal-name' />,
    <DateOfBirth dateOfBirth={application.dateOfBirth} key='date-of-birth' />,
    <HomeAddress homeAddress={application.homeAddress} key='home-address' />,
    <MailingAddress mailingAddress={application.mailingAddress} key='mailing-address' />,
    <PhysicalTraits physicalTraits={application.physicalTraits} key='physicalTraits' />,
    <TraitsHeightWeight traitsHeightWeight={application.traitsHeightWeight} key='traits-height-weight' />,
    <OrganDonation organDonation={application.organDonation} key='organ-donation' />,
    <SocialSecurity socialSecurity={application.socialSecurity} key='social-security' />,
    <PrivilegeRemovedHistory privilegeRemovedHistory={application.privilegeRemovedHistory} key='privilege-removed-history' />,
    <DlidHistory dlidHistory={application.dlidHistory} key='existing-dl-id-info' />,
    <NamesHistory namesHistory={application.namesHistory} key='names-history' />,
    <CitizenStatus citizenStatus={application.citizenStatus} key='citizen-status' />,
    <BallotByMail ballotByMail={application.ballotByMail} key='ballot-by-mail' />,
    <EligibilityRequirements eligibilityRequirements={application.eligibilityRequirements} key='eligibility-requirements' />,
    <PoliticalPartyChoose politicalPartyChoose={application.politicalPartyChoose} key='choose-party' />,
    <BallotLanguage ballotLanguage={application.ballotLanguage} key='ballot-language' />,
    <PoliticalContact politicalContact={application.politicalContact} key='political-contact' />,
    <OptOut optOut={application.optOut} key='opt-out' />,
    <Empty {...application} key='empty' />,

    <Link to={ alicePath(successVisit) } key="link-to-success-visit" >
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

  return (
    <div className='summary'>
      <HomeLink />
      { contents }
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SummaryHandler);
