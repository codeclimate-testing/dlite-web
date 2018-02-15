'use strict';
import {
  addWdywtdt,
  addMedicalHistory
} from './next-path';

const addCard = [
  {
    key: 'addWdywtdt',
    description: 'what do you want to do with added card',
    path: '/driver-license',
    next: addWdywtdt
  },
  {
    key: 'addCurrentCardInfo',
    description: 'add current card info',
    path: '/driver-license/current-card-information',
    next: 'addLicenseClass'
  },
  {
    key: 'addLicenseClass',
    description: 'choose license class for added card',
    path: '/driver-license/type',
    next: 'addMedicalHistory'
  },
  {
    key: 'addMedicalHistory',
    description: 'add medical history for added card',
    path: '/driver-license/medical-history',
    next: addMedicalHistory
  },
  {
    key: 'addLicenseHistory',
    description: 'add license history for added card',
    path: '/driver-license/license-history',
    next: 'addIssueHistory'
  },
  {
    key: 'addIssueHistory',
    description: 'add issue history for added card',
    path: '/driver-license/issue-history',
    next: 'summary'
  }
];

export default addCard;