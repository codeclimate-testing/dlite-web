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
    next: ''
  }
];

export default cdlHistory;
