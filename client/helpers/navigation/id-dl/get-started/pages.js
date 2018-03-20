'use strict';
import {
  nextOrSummary,
  applyEditOrAddPath
} from '../../../data/pathnames';
import {
  dateOfBirth,
  wdywtdt,
  chooseCardType,
  currentCardInfo,
  changedCard,
  seniorID,
  realID,
  chooseLicenseClass
} from './next-path';


const getStarted = [
  {
    key: 'IDme',
    description: 'IDDL sign-in',
    path: '/sign-in',
    next: 'legalName'
  },
  {
    key: 'legalName',
    description: 'Legal name',
    path: applyEditOrAddPath('/my-basics/legal-name'),
    next: nextOrSummary('dateOfBirth'),
    validateFromSummary: true
  },
  {
    key: 'dateOfBirth',
    description: 'Date of birth',
    path: applyEditOrAddPath('/my-basics/date-of-birth'),
    next: dateOfBirth,
    validateFromSummary: true
  },
  {
    key: 'wdywtdt',
    description: 'What do you want to do today?',
    path: applyEditOrAddPath('/what-do-you-want-to-do-today'),
    next: wdywtdt,
    validateFromSummary: true
  },
  {
    key: 'chooseCardType',
    description: 'Choose card type',
    path: applyEditOrAddPath('/select-id-dl'),
    next: chooseCardType
  },
  {
    key: 'currentCardInfo',
    description: 'Current card info',
    path: applyEditOrAddPath('/current-card-information'),
    next: currentCardInfo
  },
  {
    key: 'updateAndCorrect',
    description: 'Updates and Corrections',
    path: applyEditOrAddPath('/updates-and-corrections'),
    next: changedCard
  },
  {
    key: 'replacementDetails',
    description: 'Replacement Details',
    path: applyEditOrAddPath('/replacement-details'),
    next: changedCard
  },
  {
    key: 'youthIDInstead',
    description: 'Youth DL message',
    path: applyEditOrAddPath('/youth-license-notification'),
    next: nextOrSummary('realID'),
  },
  {
    key: 'seniorID',
    description: 'Senior ID',
    path: applyEditOrAddPath('/senior-id'),
    next: seniorID,
    validateFromSummary: true
  },
  {
    key: 'realID',
    description: 'Real ID',
    path: applyEditOrAddPath('/real-id'),
    next: realID,
    validateFromSummary: true
  },
  {
    key: 'chooseLicenseClass',
    description: 'Choose license class',
    path: applyEditOrAddPath('/license-type'),
    next: chooseLicenseClass,
    validateFromSummary: true
  },
  {
    key: 'reducedFeeID',
    description: 'Reduced fee ID',
    path: applyEditOrAddPath('/reduced-fee'),
    next: nextOrSummary('getStarted')
  },
  {
    key: 'getStarted',
    description: 'Get started intro page',
    path: '/get-started',
    next: 'addresses'
  }
];

export default getStarted;