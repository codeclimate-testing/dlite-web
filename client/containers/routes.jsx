'use strict';

import React                                  from 'react';
import { Route }                              from 'react-router-dom';
import { pathForPage }                        from '../helpers/navigation/page';
import {
  alicePath,
  iddlPath,
  addPath,
  cdlPath
}   from '../helpers/alice-path';

import Home                                   from '../presentations/home.jsx';
import ChooseLanguage                         from './get-started/choose-language-page.jsx';
import ChooseApplication                      from './get-started/choose-application-page.jsx';
import IDDLWelcome                            from '';
import CDLWelcome                             from '';

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
        <Route path={ alicePath('/links') }                     exact component={Home} />

        <Route path={ alicePath('/choose-language')}            component={ChooseLanguage} />
        <Route path={ alicePath('/choose-application')}         component={ChooseApplication}/>
        <Route path={ alicePath('/id-dl')}                      component={IDDLWelcome} />
        <Route path={ cdlPath('')}                              component={CDLWelcome} />

        <Route path={ alicePath('/sign-in') }                   component={IDMe} />
        <Route path={ alicePath('/')}                           exact component={Welcome} />
        <Route path={ alicePath('/welcome') }                   component={Welcome} />
        <Route path={ pathForPage('welcome') }                  component={Welcome} />

        <Route path={ iddlPath('/my-basics/legal-name') }       component={LegalName} />
        <Route path={ iddlPath('/my-basics/date-of-birth') }    component={DateOfBirth} />
        <Route path={ iddlPath('/what-do-you-want-to-do-today') } exact render={(props) => <WhatDoYouWantToDoToday {...props} addressName='wdywtdt' />} />
        <Route path={ iddlPath('/select-id-dl') }               component={ChooseCard} />
        <Route path={ iddlPath('/current-card-information') }   exact render={(props) => <CurrentCardInfo {...props} addressName='currentCardInfo' />}/>
        <Route path={ iddlPath('/updates-and-corrections') }    exact render={(props) => <UpdatesCorrects {...props} addressName='updateAndCorrect' />} />
        <Route path={ iddlPath('/replacement-details') }        exact render={(props) => <ReplacementDetails {...props} addressName='replacementDetails' />} />
        <Route path={ iddlPath('/senior-id') }                  exact render={(props) => <SeniorID addressName='seniorID' {...props}/>}/>
        <Route path={ iddlPath('/youth-license-notification') } component={YouthLicenseNotification} />
        <Route path={ iddlPath('/real-id') }                    component={RealID} />
        <Route path={ iddlPath('/license-type') }               exact render={(props) => <LicenseType {...props} addressName='chooseLicenseClass'/>}/>
        <Route path={ iddlPath('/reduced-fee')}                 exact render={(props) => <ReducedFee {...props} addressName='reducedFeeID' />}/>
        <Route path={ iddlPath('/get-started') }                component={GetStarted} />

        <Route path={ iddlPath('/my-basics/address') }          component={Address} />
        <Route path={ iddlPath('/my-basics/traits-height-weight')} component={TraitsHeightWeight} />
        <Route path={ iddlPath('/my-basics/physical-traits') }  component={PhysicalTraits} />
        <Route path={ iddlPath('/my-basics/social-security' ) } component={SocialSecurity} />

        <Route path={ iddlPath('/my-history/medical' ) }        exact render={(props) => <MedicalHistory {...props} addressName='medicalHistory' />} />
        <Route path={ iddlPath('/my-history/license-and-id')}   exact render={(props) => <CardHistory {...props} addressName='cardHistory' />} />
        <Route path={ iddlPath('/my-history/names' ) }          component={NamesHistory} />
        <Route path={ iddlPath('/my-history/license-issues')}   exact render={(props) => <LicenseIssues {...props} addressName='licenseIssues' />} />
        <Route path={ iddlPath('/my-history/veterans-service')} component={VeteransService} />

        <Route path={ iddlPath('/organ-donation' ) }            component={OrganDonation} />

        <Route path={ iddlPath('/voting-registration/introduction') } component={VoterIntro} />
        <Route path={ iddlPath('/voting-registration/citizenship') }  component={VoterCitizenStatus} />
        <Route path={ iddlPath('/voting-registration/eligibility') }  component={EligibilityRequirements} />
        <Route path={ iddlPath('/voting-registration/opt-out') }      component={OptOut} />
        <Route path={ iddlPath('/voting-registration/preferences') }  component={VoterPreferencesIntro} />
        <Route path={ iddlPath('/voting-registration/preferences-updated') }  component={VoterPreferencesIntroUpdated} />
        <Route path={ iddlPath('/voting-registration/choose-party') } component={PoliticalPartyChoose} />
        <Route path={ iddlPath('/voting-registration/language') }     component={BallotLanguage} />
        <Route path={ iddlPath('/voting-registration/vote-by-mail') } component={BallotByMail} />
        <Route path={ iddlPath('/voting-registration/contact-methods') } component={ContactMethods} />
        <Route path={ iddlPath('/voting-registration/confirmation') } component={VoterRegComplete} />

        <Route path={ iddlPath('/guardian-signature') }             component={GuardianSignature} />
        <Route path={ iddlPath('/summary') }                        component={Summary} />
        <Route exact path={ iddlPath('/appointment-preparation/') } component={AppointmentPreparation} />
        <Route path={ iddlPath('/appointment-preparation/documents') } component={RequiredDocuments} />

        <Route path={ addPath('/driver-license') } exact                  render={(props) => <WhatDoYouWantToDoToday {...props} addressName='addWdywtdt' />}/>
        <Route path={ addPath('/driver-license/current-card-information') } exact render={(props) => <CurrentCardInfo {...props} addressName='addCurrentCardInfo' />}/>
        <Route path={ addPath('/driver-license/updates-and-corrections') } exact render={(props) => <UpdatesCorrects {...props} addressName='addUpdateCorrect' />}/>
        <Route path={ addPath('/driver-license/replacement-details') }  exact render={(props) => <ReplacementDetails {...props} addressName='addReplacementDetails' />}/>
        <Route path={ addPath('/driver-license/type') }                 exact render={(props) => <LicenseType {...props} addressName='addLicenseClass' />} />
        <Route path={ addPath('/driver-license/medical-history') }      exact render={(props) => <MedicalHistory {...props} addressName='addMedicalHistory' />} />
        <Route path={ addPath('/driver-license/license-history') }      exact render={(props) => <CardHistory {...props} addressName='addLicenseHistory'/> } />
        <Route path={ addPath('/driver-license/issue-history') }        exact render={(props) => <LicenseIssues {...props} addressName='addIssueHistory' />} />

        <Route path={ addPath('/id-card') }                         exact render={(props) => <WhatDoYouWantToDoToday {...props} addressName='addIDWdywtdt' />}/>
        <Route path={ addPath('/id-card/current-card-information')} exact render={(props) => <CurrentCardInfo {...props} addressName='addCurrentIDInfo' />} />
        <Route path={ addPath('/id-card/updates-and-corrections') } exact render={(props) => <UpdatesCorrects {...props} addressName='addCorrectUpdateID' />} />
        <Route path={ addPath('/id-card/replacement-details') }     exact render={(props) => <ReplacementDetails {...props} addressName='addIDReplacementDetails' />} />
        <Route path={ addPath('/id-card/senior-id') }               exact render={(props) => <SeniorID {...props} addressName='addSeniorID' />} />
        <Route path={ addPath('/id-card/reduced-fee') }             exact render={(props) => <ReducedFee {...props} addressName='addReducedFee' />} />
      </div>
    );
  }
}

export default Router;
