'use strict'

import React                from 'react'
import Accordion            from '../../containers/accordion.jsx';
import Page                 from '../../containers/page.jsx';
import { ageChecks }        from '../../helpers/calculate-age';
import Alerts               from './summary/alerts.jsx';
import {
  hideMain,
  getErrorMessage
} from '../../helpers/data/summary';

import {
  LegalName,
  DateOfBirth,
  SeniorID,
  IDRealID,
  DLRealID,
  LicenseType,
  ReducedOrNoFee,
  Address,
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
  GuardianSignature,
  OptOut,
  Empty,
  IDApplicationNotStarted,
  DLApplicationNotStarted,
  IDAction,
  DLAction,
  CurrentIDInfo,
  CurrentDLInfo
} from './summary/index.js';
import {
  ErrorMessageBox
} from '../validations.jsx';


const header = {
  question: 'Please take a minute to review your answers'
};

const contents = (application) => {

  return([
  <Accordion id='id-application-details-summary' title='My ID' key='id-application-details-summary'>
    <IDApplicationNotStarted {...application} key='id-application-not-started' />
    <IDAction {...application} />
    <ReducedOrNoFee {...application} reducedFee = {application.IDApp.reducedFee}/>
    <SeniorID seniorID={application.IDApp.seniorID} />
    <CurrentIDInfo {...application} currentCardInfo={application.IDApp.currentCard}/>
    <IDRealID {...application} />
  </Accordion>,

  <Accordion id='driver-license-application-details-summary' title='My Driver License' key='driver-license-application-details-summary'>
    <DLApplicationNotStarted {...application} key='dl-application-not-started' />
    <DLAction {...application} />
    <CurrentDLInfo {...application} currentCardInfo={application.DLApp.currentCard}/>
    <DLRealID {...application} />
    <LicenseType {...application} />
  </Accordion>,

  <Accordion id='basics-summary' title='My basics' key='basics-summary'>
    <Empty {...application} key='empty' />
    <LegalName legalName={application.basics.legalName} />
    <DateOfBirth dateOfBirth={application.basics.dateOfBirth} />
    <Address address={application.basics.address} />
    <PhysicalTraits physicalTraits={application.basics.physicalTraits} />
    <TraitsHeightWeight traitsHeightWeight={application.basics.traitsHeightWeight} />
    <SocialSecurity socialSecurity={application.basics.socialSecurity} />
  </Accordion>,

  <Accordion id='history-summary' title='My history' key='history-summary'>
    <MedicalHistory medicalHistory={application.history.medicalHistory} cardType={application.cardType} />
    <LicenseAndIdHistory licenseAndIdHistory={application.history.licenseAndIdHistory} />
    <NamesHistory namesHistory={application.history.namesHistory} />
    <LicenseIssues licenseIssues={application.history.licenseIssues} />
    <VeteransService veteransService={application.history.veteransService} />
  </Accordion>,

  <Accordion id='organ-donation-summary' title='Organ donation' key='organ-donation-summary'>
    <OrganDonation organDonation={application.organDonation} />
  </Accordion>,

  <Accordion id='voter-registration-summary' title='Voter registration' key='voter-registration-summary'>
    <CitizenStatus citizenStatus={application.voting.citizenStatus} />
    <EligibilityRequirements eligibilityRequirements={application.voting.eligibilityRequirements} />
    <OptOut optOut={application.voting.optOut} />
    <PoliticalPartyChoose politicalPartyChoose={application.voting.politicalPartyChoose} />
    <BallotLanguage ballotLanguage={application.basics.language.ballotLanguage} />
    <BallotByMail ballotByMail={application.voting.ballotByMail} />
    <ContactMethods contactMethods={application.voting.contactMethods} />
  </Accordion>
  ]);
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
  let application = props.application;

  return (
      <Page
        {...props}
        sectionKey='summary'
      >
        <div className={props.server.apiStatus}/>
        <form onSubmit  = { props.onSubmit } className={hideMain(props)}>
          <h2 className='question'>{header.question}</h2>

          <div className='translation-missing'>
            <ErrorMessageBox
              errorMessage={getErrorMessage(props)}
            />
          </div>
          <div className= 'summary'>
            <Alerts
              cardType    = {application.cardType}
              dateOfBirth = {application.basics.dateOfBirth}
            />
            {contents(application)}
            <ButtonComponent
              continueDisabled = { props.continueDisabled }
            />
          </div>
        </form>
      </Page>
  )
};

export default SummaryPage;
