'use strict';
import {
  nextOrSummary,
  applyEditOrAddPath
} from '../../../data/pathnames';
import {
  medicalHistory,
  nameHistory,
  cardHistory
} from './next-path';

const myHistory = [
  {
    key: 'medicalHistory',
    description: 'Medical history',
    path: applyEditOrAddPath('/my-history/medical-history'),
    next: medicalHistory,
    validateFromSummary: true
  },
  {
    key: 'cardHistory',
    description: 'License and id history',
    path: applyEditOrAddPath('/my-history/license-and-id'),
    next: cardHistory,
    validateFromSummary: true
  },
  {
    key: 'nameHistory',
    description: 'Names history',
    path: applyEditOrAddPath('/my-history/names'),
    next: nameHistory,
    validateFromSummary: true
  },
  {
    key: 'licenseIssues',
    description: 'License issues',
    path: applyEditOrAddPath('/my-history/license-issues'),
    next: nextOrSummary('veterans'),
    validateFromSummary: true
  },
  {
    key: 'veterans',
    description: 'Veterans service',
    path: applyEditOrAddPath('/my-history/veterans-service'),
    next: nextOrSummary('organDonation'),
    validateFromSummary: true
  }
];

export default myHistory;