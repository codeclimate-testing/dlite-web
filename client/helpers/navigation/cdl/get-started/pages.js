'use strict';
import {
  nextOrCDLSummary,
  applyOrEditCDLPath
} from '../../../data/pathnames';

import {
  cdlWdywtdt,
  cdlCurrentCard,
  changedCDL,
  cdlCurrentDL,
  cdlCertification
} from './next-path';

const cdlGetStarted = [
  {
   key: 'cdlDisclaimers',
   description: 'CDL Disclaimers',
   path: '/disclaimers',
   next: 'cdlIDme'
  },
  {
    key: 'cdlIDme',
    description: 'CDL sign-in',
    path: '/sign-in',
    next: 'cdlLegalName'
  },
  {
    key: 'cdlLegalName',
    description: 'Legal Name',
    path: applyOrEditCDLPath('/my-basics/true-name'),
    next: nextOrCDLSummary('cdlDateOfBirth')
  },
  {
    key: 'cdlDateOfBirth',
    description: 'Date of Birth',
    path: applyOrEditCDLPath('/my-basics/date-of-birth'),
    next: nextOrCDLSummary('cdlWdywtdt')
  },
  {
    key: 'cdlWdywtdt',
    description: 'What do you want to do today',
    path: applyOrEditCDLPath('/what-do-you-want-to-do-today'),
    next: cdlWdywtdt
  },
  {
    key: 'cdlCurrentCard',
    description: 'Current CDL info',
    path: applyOrEditCDLPath('/current-card-information'),
    next: cdlCurrentCard
  },
  {
    key: 'cdlCardReplacement',
    description: 'CDL Replacement Details',
    path: applyOrEditCDLPath('/replacement-details'),
    next: changedCDL
  },
  {
    key: 'cdlChanges',
    description: 'make updates and corrections',
    path: applyOrEditCDLPath('/change-details'),
    next: changedCDL
  },
  {
    key: 'cdlCurrentDL',
    description: 'current DL info',
    path: applyOrEditCDLPath('/current-ca-license'),
    next: cdlCurrentDL
  },
  {
    key: 'cdlRealID',
    description: 'realID',
    path: applyOrEditCDLPath('/real-id'),
    next: nextOrCDLSummary('cdlClass')
  },
  {
    key: 'cdlClass',
    description: 'CDL class',
    path: applyOrEditCDLPath('/license-class'),
    next: nextOrCDLSummary('cdlEndorsements')
  },
  {
    key: 'cdlEndorsements',
    description: 'CDL Endorsements',
    path: applyOrEditCDLPath('/endorsements'),
    next: nextOrCDLSummary('cdlCertificates')
  },
  {
    key: 'cdlCertificates',
    description: 'CDL Certificates',
    path: applyOrEditCDLPath('/certificates'),
    next: 'motorcycle'
  },
  {
    key: 'cdlCertification',
    description: 'self-certification inter/intra-state',
    path: applyOrEditCDLPath('/self-certification'),
    next: cdlCertification
  },
  {
    key: 'motorcycle',
    description: 'add classM to cdl',
    path: applyOrEditCDLPath('/motorcycle'),
    next: 'cdlSexEyeHair'
  }
];

export default cdlGetStarted;
