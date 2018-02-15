'use strict';

import {
  medicalHistory,
  nameHistory
} from './next-path';

const myHistory = [
  {
    key: 'medicalHistory',
    description: 'Medical history',
    path: '/my-history/medical/',
    next: medicalHistory
  },
  {
    key: 'cardHistory',
    description: 'License and id history',
    path: '/my-history/license-and-id',
    next: 'nameHistory'
  },
  {
    key: 'nameHistory',
    description: 'Names history',
    path: '/my-history/names/',
    next: nameHistory
  },
  {
    key: 'licenseIssues',
    description: 'License issues',
    path: '/my-history/license-issues',
    next: 'veterans'
  },
  {
    key: 'veterans',
    description: 'Veterans service',
    path: '/my-history/veterans-service',
    next: 'organDonation'
  }
];

export default myHistory;