'use strict';
import {
  addIDWdywtdt,
  addCurrentIDInfo,
  addChangedID,
  addSeniorID
} from './next-path';

const addIDCard = [
  {
    key: 'addIDWdywtdt',
    description: 'what do you want to do with added ID card',
    path: '/id-card',
    next: addIDWdywtdt
  },
  {
    key: 'addCurrentIDInfo',
    description: 'add current ID info',
    path: '/id-card/current-card-information',
    next: addCurrentIDInfo
  },
  {
    key: 'addCorrectUpdateID',
    description: 'correct/update info for added ID',
    path: '/id-card/updates-and-corrections',
    next: addChangedID
  },
  {
    key: 'addIDReplacementDetails',
    description: 'add replacement details to added ID',
    path: '/id-card/replacement-details',
    next: addChangedID
  },
  {
    key: 'addSeniorID',
    description: 'get senior ID on added ID card',
    path: '/id-card/senior-id',
    next: addSeniorID
  },
  {
    key: 'addReducedFee',
    description: 'add reduced fee to added ID card',
    path: '/id-card/reduced-fee',
    next: 'summary'
  },
  {
    key: 'addIDRealID',
    description: 'add real ID',
    path: '/id-card/real-id',
    next: 'summary'
  }
];

export default addIDCard;