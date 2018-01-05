'use strict';

import alicePath from '../alice-path';
import {
  chooseCardType,
  currentCardInfo,
  realID,
  chooseLicenseClass
} from './next-path';

const getStarted = [
  {
    key: 'trueName',
    description: 'True name',
    path: '/my-basics/legal-name',
    next: 'dateOfBirth',
  },
  {
    key: 'dateOfBirth',
    description: 'Date of birth',
    path: '/my-basics/date-of-birth',
    next: 'wdywtdt'
  },
  {
    key: 'wdywtdt',
    description: 'What do you want to do today?',
    path: '/what-do-you-want-to-do-today',
    next: 'chooseCardType'
  },
  {
    key: 'chooseCardType',
    description: 'Choose card type',
    path: '/select-id-dl',
    next: chooseCardType
  },
  {
    key: 'currentCardInfo',
    description: 'Current card info',
    path: '/current-card-information',
    next: currentCardInfo
  },
  {
    key: 'youthDlMessage',
    description: 'Youth DL message',
    path: '/youth-license-notification',
    next: 'realID',
  },
  {
    key: 'seniorID',
    description: 'Senior ID',
    path: '/senior-id',
    next: 'realID'
  },
  {
    key: 'realID',
    description: 'Real ID',
    path: '/real-id',
    next: realID
  },
  {
    key: 'chooseLicenseClass',
    description: 'Choose license class',
    path: '/license-type',
    next: chooseLicenseClass
  },
  {
    key: 'reducedFeeID',
    description: 'Reduced fee ID',
    path: '/reduced-fee',
    next: 'getStarted'
  },
  {
    key: 'getStarted',
    description: 'Get started intro page',
    path: '/get-started',
    next: 'addresses',
  },
  {
    key: 'guardianSignature',
    description: 'Parent/Guardian Signature',
    path: '/guardian-signature',
    next: 'summary',
  }
];

const myBasics = [
  {
    key: 'addresses',
    description: 'Addresses',
    path: '/my-basics/address'
  },
  {
    key: 'heightWeight',
    description: 'Height and weight',
    path: '/my-basics/traits-height-weight'
  },
  {
    key: 'sexEyeHair',
    description: 'Physical traits',
    path: '/my-basics/physical-traits'
  },
  {
    key: 'socialSecurity',
    description: 'Social security',
    path: '/my-basics/social-security'
  }
];

const myHistory = [
  {
    key: 'licenseHistory',
    description: 'License and id history',
    path: '/my-history/license-and-id'
  },
  {
    key: 'nameHistory',
    description: 'Names history',
    path: '/my-history/names/'
  },
  {
    key: 'medicalHistory',
    description: 'Medical history',
    path: '/my-history/medical/'
  },
  {
    key: 'licenseIssues',
    description: 'License issues',
    path: '/my-history/license-issues'
  },
  {
    key: 'veterans',
    description: 'Veterans service',
    path: '/my-history/veterans-service'
  }
];

const organDonation = [
  {
    key: 'organDonation',
    description: 'Organ donation',
    path: '/organ-donation'
  }
];

const voterRegistration = [
  {
    key: 'voterIntro',
    description: 'Voter intro',
    path: '/voting-registration/introduction'
  },
  {
    key: 'citizenship',
    description: 'Citizenship',
    path: '/voting-registration/citizenship'
  },
  {
    key: 'votingEligibility',
    description: 'Eligibility ',
    path: '/voting-registration/eligibility'
  },
  {
    key: 'votingOptOut',
    description: 'Opt out',
    path: '/voting-registration/opt-out'
  },
  {
    key: 'voterPreferences',
    description: 'Voter preferences',
    path: '/voting-registration/preferences'
  },
  {
    key: 'choosePoliticalParty',
    description: 'Choose party',
    path: '/voting-registration/choose-party'
  },
  {
    key: 'chooseBallotLanguage',
    description: 'Ballot language',
    path: '/voting-registration/language'
  },
  {
    key: 'ballotByMail',
    description: 'Ballot by mail',
    path: '/voting-registration/vote-by-mail'
  },
  {
    key: 'contactMethods',
    description: 'Contact methods',
    path: '/voting-registration/contact-methods'
  },
  {
    key: 'voterConfirmation',
    description: 'Voter registration confirmation',
    path: '/voting-registration/confirmation'
  },
];

const conclusion = [
  {
    key: 'summary',
    description: 'Summary',
    path: '/summary'
  },
  {
    key: 'appointmentPreparation',
    description: 'Appointment preparation',
    path: '/appointment-preparation'
  },
  {
    key: 'requiredDocuments',
    description: 'Required documents',
    path: '/appointment-preparation/documents'
  }
];

const expand = (collection) => {
  return collection.map((item) => {
    let path = alicePath(item.path);
    return Object.assign({}, item, {path: path});
  });
};

export default {
  getStarted: expand(getStarted),
  myBasics: expand(myBasics),
  myHistory: expand(myHistory),
  organDonation: expand(organDonation),
  voterRegistration: expand(voterRegistration),
  conclusion: expand(conclusion)
};

