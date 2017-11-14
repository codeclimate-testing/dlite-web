'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';

import alicePath                              from '../helpers/alice-path';
import Home                                   from '../presentations/home.jsx';
import Summary                                from './summary-handler.jsx';


import Intro                                  from '../presentations/apply/intro.jsx';
import LegalName                              from './apply/legal-name-form-container.jsx';
import DateOfBirth                            from './apply/date-of-birth-form-container.jsx';
import Address                                from './apply/address-form-container.jsx';
import TraitsHeightWeight                     from './apply/traits-height-weight-form-container.jsx';
import PhysicalTraits                         from './apply/physical-traits-form-container.jsx';
import SocialSecurity                         from './apply/social-security-form-container.jsx';
import VoterIntro                             from '../presentations/voter/voter-intro-info.jsx';
import OrganDonation                          from './apply/organ-donation-form-container.jsx';
import PrivilegeRemovedHistory                from './apply/privilege-removed-history-form-container.jsx';

import DlidHistory                            from './apply/dlid-history-form-container.jsx';
import NamesHistory                           from './apply/names-history-form-container.jsx';
import VeteransHistory                        from '../presentations/apply/veterans-history-info.jsx';

import VoterCitizenStatus                     from './voter/citizen-status-form-container.jsx';
import EligibilityRequirements                from './voter/eligibility-requirements-form-container.jsx';
import OptOut                                 from './voter/opt-out-form-container.jsx';
import VoterPreferencesIntro                  from '../presentations/voter/voter-preferences-intro-form.jsx';
import VoterPreferencesIntroPreregistered     from '../presentations/voter/voter-preferences-intro-preregistered-form.jsx';
import PoliticalPartyChoose                   from './voter/choose-party-form-container.jsx';
import BallotLanguage                         from './voter/ballot-language-form-container.jsx';
import BallotByMail                           from './voter/ballot-by-mail-form-container.jsx';
import PoliticalContact                       from './voter/political-contact-form-container.jsx';
import VoterRegComplete                       from '../presentations/voter/voter-reg-complete-info.jsx';
import SuccessVisit                           from '../presentations/success-visit-info.jsx';


class Router extends React.Component {
  render() {
    return (
      <div className='routes'>
        <Route path={ alicePath('/') } exact component={Intro} />
        <Route path={ alicePath('/what-do-you-want-to-do-today') } component={Intro} />
        <Route path={ alicePath('/links') } exact component={Home} />
        <Route path={ alicePath('/summary') } component={Summary} />
        <Route path={ alicePath('/my-basics/legal-name') } component={LegalName} />
        <Route path={ alicePath('/my-basics/date-of-birth') } component={DateOfBirth} />
        <Route path={ alicePath('/my-basics/address') } component={Address} />
        <Route path={ alicePath('/my-basics/traits-height-weight' ) } component={TraitsHeightWeight} />
        <Route path={ alicePath('/my-basics/physical-traits') } component={PhysicalTraits} />
        <Route path={ alicePath('/my-basics/social-security' ) } component={SocialSecurity} />
        <Route path={ alicePath('/about-me/organ-donation' ) } component={OrganDonation} />
        <Route path={ alicePath('/about-me/privilege-removed-history')} component={PrivilegeRemovedHistory} />
        <Route path={ alicePath('/about-me/license-history')} component={DlidHistory} />
        <Route path={ alicePath('/about-me/names-history' ) } component={NamesHistory} />
        <Route path={ alicePath('/about-me/veterans-history') } component={VeteransHistory} />

        <Route path={ alicePath('/voter/voter-introduction') } component={VoterIntro} />
        <Route path={ alicePath('/about-me/voter/am-citizen') } component={VoterCitizenStatus} />
        <Route path={ alicePath('/about-me/voter/eligibility-requirements') } component={EligibilityRequirements} />
        <Route path={ alicePath('/about-me/voter/opt-out') } component={OptOut} />
        <Route path={ alicePath('/about-me/voter/voter-preferences-intro') } component={VoterPreferencesIntro} />
        <Route path={ alicePath('/about-me/voter/voter-preferences-intro-preregistered') } component={VoterPreferencesIntroPreregistered} />
        <Route path={ alicePath('/about-me/voter/choose-party') } component={PoliticalPartyChoose} />
        <Route path={ alicePath('/about-me/voter/ballot-language') } component={BallotLanguage} />
        <Route path={ alicePath('/about-me/voter/ballot-by-mail') } component={BallotByMail} />
        <Route path={ alicePath('/about-me/voter/political-contact') } component={PoliticalContact} />
        <Route path={ alicePath('/about-me/voter/voter-reg-complete/') } component={VoterRegComplete} />
        <Route path={ alicePath('/about-me/success-visit') } component={SuccessVisit} />

      </div>
    );
  }
}

export default Router;
