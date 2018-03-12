'use strict';

import {
  cdlWdywtdt,
  cdlCurrentCard,
  cdlSSN,
  cdlCertification
} from './next-path';

const cdlGetStarted = [
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
    next: 'cdlClass'
  },
  {
    key: 'cdlClass',
    description: 'CDL class',
    path: '/license-class',
    next: 'cdlEndorsements'
  },
  {
    key: 'cdlEndorsements',
    description: 'CDL Endorsements',
    path: '/endorsements',
    next: 'cdlCertificates'
  },
  {
    key: 'cdlCertificates',
    description: 'CDL Certificates',
    path: '/certificates',
    next: ''
  },
  {
    key: 'cdlCertification',
    description: 'self-certification inter/intra-state',
    path: '/self-certification',
    next: cdlCertification
  },
  {
    key: 'motorcycle',
    description: 'add classM to cdl',
    path: '/motorcycle',
    next: '' //next will go to get started overview page
  },
  {
    key: 'cdlOrganDonation',
    description: 'organ donation',
    path: '/organ-donation',
    next: ''
  }
];

export default cdlGetStarted;
