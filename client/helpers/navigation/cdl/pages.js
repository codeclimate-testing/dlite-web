'use strict';

import {
  cdlWdywtdt,
  cdlCurrentCard,
  cdlSSN
} from './next-path';

const cdl = [
  {
    key: 'cdl',
    description: 'CDL welcome page',
    path: '',
    next: 'IDme'
  },
  {
    key: 'cdlLegalName',
    description: 'Legal Name',
    path: '/true-name',
    next: 'cdlDateOfBirth'
  },
  {
    key: 'cdlDateOfBirth',
    description: 'Date of Birth',
    path: '/date-of-birth',
    next: 'cdlWdywtdt'
  },
  {
    key: 'cdlWdywtdt',
    description: 'What do you want to do today',
    path: '/what-do-you-want-to-do-today',
    next: cdlWdywtdt
  },
  {
    key: 'cdlCurrentCard',
    description: 'Current CDL info',
    path: '/current-card-information',
    next: cdlCurrentCard
  },
  {
    key: 'cdlCardReplacement',
    description: 'CDL Replacement Details',
    path: '/replacement-details',
    next: 'cdlResidency'
  },
  {
    key: 'cdlChanges',
    description: 'make updates and corrections',
    path: '/change-details',
    next: 'cdlResidency'
  },
  {
    key: 'cdlResidency',
    description: 'California residency',
    path: '/california-residency',
    next: 'cdlSocialSecurity'
  },
  {
    key: 'cdlSocialSecurity',
    description: 'Social Security',
    path: '/social-security',
    next: cdlSSN
  },
  {
    key: 'cdlCurrentDL',
    description: 'current DL info',
    path: '/current-ca-license',
    next: 'cdlRealID'
  },
  {
    key: 'cdlRealID',
    description: 'realID',
    path: '/real-id',
    next: 'cdlSummary'
  },
  {
    key: 'motorcycle',
    description: 'add classM to cdl',
    path: '/motorcycle',
    next: ''
  },
  {
    key: 'cdlSummary',
    description: 'summary of CDL app',
    path: '/summary',
    next: ''
  }
];

export default cdl;
