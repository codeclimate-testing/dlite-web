'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';

import alicePath                              from '../helpers/alice-path';
import Home                                   from '../presentations/home.jsx';
import Summary                                from './summary-handler.jsx';
import RequiredDocuments                      from './required-documents-handler.jsx';

import LegalName                              from './intro/name-page.jsx';
import DateOfBirth                            from './intro/date-of-birth-page.jsx';
import WhatDoYouWantToDoToday                 from './intro/what-do-you-want-to-do-today-page.jsx';
import ChooseCard                             from './intro/choose-card-page.jsx';
import CurrentCardInfo                        from './intro/current-card-page.jsx';
import SeniorID                               from './intro/senior-id-page.jsx';
import YouthLicenseNotification               from './intro/youth-license-notification-page.jsx';
import RealID                                 from './intro/real-id-page.jsx';
import LicenseType                            from './intro/license-type-page.jsx';
import ReducedFee                             from './intro/reduced-fee-page.jsx';
import GetStarted                             from './intro/get-started-page.jsx';

import Address                                from './apply/address-page.jsx';
import TraitsHeightWeight                     from './apply/traits-height-weight-form-container.jsx';
import PhysicalTraits                         from './apply/physical-traits-form-container.jsx';
import SocialSecurity                         from './apply/social-security-form-container.jsx';
import VoterIntro                             from './voter-registration/introduction-form-container.jsx';
import OrganDonation                          from './apply/organ-donation-form-container.jsx';
import LicenseIssues                          from './apply/license-issues-form-container.jsx';
import LicenseAndId                           from './apply/card-history-page.jsx';
import MedicalHistory                         from './apply/medical-history-form-container.jsx';
import NamesHistory                           from './apply/names-history-form-container.jsx';
import VeteransService                        from './apply/veterans-service-form-container.jsx';
import VoterCitizenStatus                     from './voter-registration/citizen-status-form-container.jsx';
import EligibilityRequirements                from './voter-registration/eligibility-requirements-form-container.jsx';
import OptOut                                 from './voter-registration/opt-out-form-container.jsx';
import VoterPreferencesIntro                  from './voter-registration/voter-preferences-form-container.jsx';
import VoterPreferencesIntroUpdated           from './voter-registration/voter-preferences-updated-form-container.jsx';
import PoliticalPartyChoose                   from './voter-registration/choose-party-form-container.jsx';
import BallotLanguage                         from './voter-registration/ballot-language-form-container.jsx';
import BallotByMail                           from './voter-registration/ballot-by-mail-form-container.jsx';
import AppointmentPreparation                 from '../presentations/appointment-preparation-info.jsx';
import ContactMethods                         from './voter-registration/contact-methods-form-container.jsx';
import VoterRegComplete                       from './voter-registration/voter-confirmation-form-container.jsx';

class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/') } exact component={LegalName} />
        <Route path={ alicePath('/my-basics/legal-name') } component={LegalName} />
        <Route path={ alicePath('/my-basics/date-of-birth') } component={DateOfBirth} />
        <Route path={ alicePath('/what-do-you-want-to-do-today') } component={WhatDoYouWantToDoToday} />
        <Route path={ alicePath('/select-id-dl') } component={ChooseCard} />
        <Route path={ alicePath('/current-card-information') } component={CurrentCardInfo} />
        <Route path={ alicePath('/senior-id') } component={SeniorID} />
        <Route path={ alicePath('/youth-license-notification') } component={YouthLicenseNotification} />
        <Route path={ alicePath('/real-id') } component={RealID} />
        <Route path={ alicePath('/license-type') } component={LicenseType} />
        <Route path={ alicePath('/reduced-fee')} component={ReducedFee} />
        <Route path={ alicePath('/get-started') } component={GetStarted} />
        <Route path={ alicePath('/links') } exact component={Home} />
        <Route path={ alicePath('/summary') } component={Summary} />
        <Route path={ alicePath('/my-basics/address') } component={Address} />
        <Route path={ alicePath('/my-basics/traits-height-weight' ) } component={TraitsHeightWeight} />
        <Route path={ alicePath('/my-basics/physical-traits') } component={PhysicalTraits} />
        <Route path={ alicePath('/my-basics/social-security' ) } component={SocialSecurity} />
        <Route path={ alicePath('/organ-donation' ) } component={OrganDonation} />
        <Route path={ alicePath('/my-history/license-issues')} component={LicenseIssues} />
        <Route path={ alicePath('/my-history/license-and-id')} component={LicenseAndId} />
        <Route path={ alicePath('/my-history/medical' ) } component={MedicalHistory} />
        <Route path={ alicePath('/my-history/names' ) } component={NamesHistory} />
        <Route path={ alicePath('/my-history/veterans-service') } component={VeteransService} />

        <Route path={ alicePath('/voting-registration/introduction') } component={VoterIntro} />
        <Route path={ alicePath('/voting-registration/citizenship') } component={VoterCitizenStatus} />
        <Route path={ alicePath('/voting-registration/eligibility') } component={EligibilityRequirements} />
        <Route path={ alicePath('/voting-registration/opt-out') } component={OptOut} />
        <Route path={ alicePath('/voting-registration/preferences') } component={VoterPreferencesIntro} />
        <Route path={ alicePath('/voting-registration/preferences-updated') } component={VoterPreferencesIntroUpdated} />
        <Route path={ alicePath('/voting-registration/choose-party') } component={PoliticalPartyChoose} />
        <Route path={ alicePath('/voting-registration/language') } component={BallotLanguage} />
        <Route path={ alicePath('/voting-registration/vote-by-mail') } component={BallotByMail} />
        <Route path={ alicePath('/voting-registration/contact-methods') } component={ContactMethods} />
        <Route path={ alicePath('/voting-registration/confirmation') } component={VoterRegComplete} />

        <Route exact path={ alicePath('/appointment-preparation/') } component={AppointmentPreparation} />
        <Route path={ alicePath('/appointment-preparation/documents') } component={RequiredDocuments} />
      </div>
    );
  }
}

export default Router;
