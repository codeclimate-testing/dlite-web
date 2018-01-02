'use strict'

import React                from 'react'
import Page                 from '../../containers/page.jsx';
import { ageChecks }        from '../../helpers/calculate-age';
import {
  getID,
  getDL
} from '../../helpers/data/card-type'; 
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
  ContinueButton,
  OptOut,
  Empty
} from './index.js';

const DLAlert = () => {
  return <h4 className='youth-license-notification'>
    If you go to the DMV office to finish your license application before you are 15.5 years old, you can only get a Junior permit. These permits are issued only in exceptional circumstances.
  </h4>
};

const IDAlert = (props) => {
  if(!getID(props)) { return null; }
  return (
    <h4 className='youth-license-notification'>
      You are eligible to complete your ID application in the office today.
    </h4>
  )
};

const Alerts = (props) => {
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

const ButtonComponent = (props) => {
  if(APP_ENV && (APP_ENV === 'development' || APP_ENV === 'test')){
    return (
        <div className='navigation-buttons row' key='save-and-continue'>
          <button type='submit' className='arrow-button forward'>
            Save & Continue
          </button>
        </div>
    );
  } 
  
  return (
      <ContinueButton disabled={props.continueDisabled} key="submit"/>
  );
};


const SummaryPage = (props) => {
  let application = props.state;

  let contents = [

    <LegalName legalName={application.legalName} key='legal-name' />,
    <DateOfBirth dateOfBirth={application.dateOfBirth} key='date-of-birth' />,
    <Cards cardType={application.cardType} currentCardInfo = {application.currentCardInfo} key='card-type' />,
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
    <OptOut optOut={application.optOut} key='opt-out' />,
    <Empty {...application} key='empty' />
  ];

  contents = contents.reduce((summaries, item) => {
    if (item.type) { summaries.push(item); }
    return summaries;
  }, []);

  return (
    <Page 
      {...props}
      sectionKey='summary'
    >
      <form onSubmit  = { props.onSubmit }>
        <div className= 'summary'>
          <Alerts 
            cardType    = {application.cardType}
            dateOfBirth = {application.dateOfBirth}
          />
          {contents}
          <ButtonComponent
            continueDisabled = { props.continueDisabled }
          />
        </div>
      </form>
    </Page>
  )
};

export default SummaryPage;