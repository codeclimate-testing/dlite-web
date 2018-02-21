'use strict';
import { alicePath }    from '../../alice-path';
import {
  chooseApplication,
  chooseCardType,
  currentCardInfo,
  updateAndCorrect,
  realID,
  chooseLicenseClass,
  replacementDetails
} from './next-path';

const getStarted = [
  {
    key: 'chooseLanguage',
    description: 'Choose language for app',
    path: alicePath('/choose-language'),
    next: 'choose'
  },
  {
    key: 'chooseApplication',
    description: 'choose CDL or ID/DL application',
    path: alicePath('/choose-application'),
    next: chooseApplication
  },
  {
    key: 'id-dl',
    description: 'ID/DL welcome page after choosing application',
    path: '/apply/id-dl',
    next: 'IDme'
  },
  {
    key: 'IDme',
    description: 'ID Me',
    path: alicePath('/sign-in'),
    next: 'welcome'
  },
  {
    key: 'welcome',
    description: 'Welcome',
    path: '/welcome',
    next: 'legalName',
  },
  {
    key: 'legalName',
    description: 'Legal name',
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
    key: 'updateAndCorrect',
    description: 'Updates and Corrections',
    path: '/updates-and-corrections',
    next: updateAndCorrect
  },
  {
    key: 'replacementDetails',
    description: 'Replacement Details',
    path: '/replacement-details',
    next: replacementDetails
  },
  {
    key: 'youthIDInstead',
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
  }
];

export default getStarted;