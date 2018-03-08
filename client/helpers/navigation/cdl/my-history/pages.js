'use strict';

const cdlHistory = [
  {
    key: 'cdlMedical',
    description: 'medical history',
    path: '/my-history/medical',
    next: 'cdlNamesHistory'
  },
  {
    key: 'cdlNamesHistory',
    description: 'Names History',
    path: '/my-history/names',
    next: 'cdlLicenseIssues'
  },
  {
    key: 'cdlLicenseIssues',
    description: 'License Issues',
    path: '/my-history/issues',
    next: ''
  },
  {
    key: 'cdlOtherStateLicenses',
    description: 'Other State Licenses',
    path: '/my-history/other-state-licenses',
    next: 'organDonation'
  }
];

export default cdlHistory;
