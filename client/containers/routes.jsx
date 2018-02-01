'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import { pathForPage }                        from '../helpers/data/page';
import alicePath                              from '../helpers/alice-path';

import Home                                   from '../presentations/home.jsx';
import ChooseLanguage                         from './get-started/choose-language-page.jsx';
import IDMe                                   from './get-started/id-me-page.jsx';
import Welcome                                from './get-started/welcome-page.jsx';
import LegalName                              from './get-started/name-page.jsx';
import DateOfBirth                            from './get-started/date-of-birth-page.jsx';
import WhatDoYouWantToDoToday                 from './get-started/what-do-you-want-to-do-today-page.jsx';
import ChooseCard                             from './get-started/choose-card-page.jsx';
import ReplacementDetails                     from './get-started/replacement-details-page.jsx';
import CurrentCardInfo                        from './get-started/current-card-page.jsx';
import UpdatesCorrects                        from './get-started/correct-or-update-page.jsx';
import YouthLicenseNotification               from './get-started/youth-license-notification-page.jsx';
import SeniorID                               from './get-started/senior-id-page.jsx';
import RealID                                 from './get-started/real-id-page.jsx';
import LicenseType                            from './get-started/license-type-page.jsx';
import ReducedFee                             from './get-started/reduced-fee-page.jsx';
import GetStarted                             from './get-started/get-started-page.jsx';

import Address                                from './my-basics/address-page.jsx';
import TraitsHeightWeight                     from './my-basics/traits-height-weight-form-container.jsx';
import PhysicalTraits                         from './my-basics/physical-traits-form-container.jsx';
import SocialSecurity                         from './my-basics/social-security-form-container.jsx';

import MedicalHistory                         from './my-history/medical-history-form-container.jsx';
import CardHistory                            from './my-history/card-history-page.jsx';
import NamesHistory                           from './my-history/names-history-form-container.jsx';
import LicenseIssues                          from './my-history/license-issues-form-container.jsx';
import VeteransService                        from './my-history/veterans-service-form-container.jsx';

import OrganDonation                          from './organ-donation/organ-donation-form-container.jsx';

import VoterIntro                             from './voter-registration/introduction-form-container.jsx';
import VoterCitizenStatus                     from './voter-registration/citizen-status-form-container.jsx';
import EligibilityRequirements                from './voter-registration/eligibility-requirements-form-container.jsx';
import OptOut                                 from './voter-registration/opt-out-form-container.jsx';
import VoterPreferencesIntro                  from './voter-registration/voter-preferences-form-container.jsx';
import VoterPreferencesIntroUpdated           from './voter-registration/voter-preferences-updated-form-container.jsx';
import PoliticalPartyChoose                   from './voter-registration/choose-party-form-container.jsx';
import BallotLanguage                         from './voter-registration/ballot-language-form-container.jsx';
import BallotByMail                           from './voter-registration/ballot-by-mail-form-container.jsx';
import ContactMethods                         from './voter-registration/contact-methods-form-container.jsx';
import VoterRegComplete                       from './voter-registration/voter-confirmation-form-container.jsx';

import AppointmentPreparation                 from './conclusion/appointment-preparation-info.jsx';
import GuardianSignature                      from './conclusion/guardian-signature-page.jsx';
import Summary                                from './conclusion/summary-handler.jsx';
import RequiredDocuments                      from './conclusion/required-documents-handler.jsx';

class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/links') } exact component={Home} />

        <Route path={ '/apply/'} exact component={Welcome} />
        <Route path={ '/apply/welcome' } component={Welcome} />
        <Route path={ alicePath('/choose-language')} component={ChooseLanguage} />
        <Route path={ pathForPage('welcome') } component={Welcome} />
        <Route path={ alicePath('/sign-in') } component={IDMe} />
        <Route path={ alicePath('/my-basics/legal-name') } component={LegalName} />
        <Route path={ alicePath('/my-basics/date-of-birth') } component={DateOfBirth} />
        <Route path={ alicePath('/what-do-you-want-to-do-today') } component={WhatDoYouWantToDoToday} />
        <Route path={ alicePath('/select-id-dl') } component={ChooseCard} />
        <Route path={ alicePath('/current-card-information') } component={CurrentCardInfo} />
        <Route path={ alicePath('/updates-and-corrections') } component={UpdatesCorrects} />
        <Route path={ alicePath('/replacement-details') } component={ReplacementDetails} />
        <Route path={ alicePath('/senior-id') } component={SeniorID} />
        <Route path={ alicePath('/youth-license-notification') } component={YouthLicenseNotification} />
        <Route path={ alicePath('/real-id') } component={RealID} />
        <Route path={ alicePath('/license-type') } component={LicenseType} />
        <Route path={ alicePath('/reduced-fee')} component={ReducedFee} />
        <Route path={ alicePath('/get-started') } component={GetStarted} />

        <Route path={ alicePath('/my-basics/address') } component={Address} />
        <Route path={ alicePath('/my-basics/traits-height-weight' ) } component={TraitsHeightWeight} />
        <Route path={ alicePath('/my-basics/physical-traits') } component={PhysicalTraits} />
        <Route path={ alicePath('/my-basics/social-security' ) } component={SocialSecurity} />

        <Route path={ alicePath('/my-history/medical' ) } component={MedicalHistory} />
        <Route path={ alicePath('/my-history/license-and-id')} component={CardHistory} />
        <Route path={ alicePath('/my-history/names' ) } component={NamesHistory} />
        <Route path={ alicePath('/my-history/license-issues')} component={LicenseIssues} />
        <Route path={ alicePath('/my-history/veterans-service') } component={VeteransService} />

        <Route path={ alicePath('/organ-donation' ) } component={OrganDonation} />

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

        <Route path={ alicePath('/summary') } component={Summary} />
        <Route path={ alicePath('/guardian-signature') } component={GuardianSignature} />
        <Route exact path={ alicePath('/appointment-preparation/') } component={AppointmentPreparation} />
        <Route path={ alicePath('/appointment-preparation/documents') } component={RequiredDocuments} />
      </div>
    );
  }
}

export default Router;
