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
    next: 'cdlOtherStateLicenses'
  },
  {
    key: 'cdlOtherStateLicenses',
    description: 'Other State Licenses',
    path: '/my-history/other-state-licenses',
    next: ''
  }
];

export default cdlHistory;
