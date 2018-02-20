'use strict';
import {
  addIDWdywtdt,
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
  }
];

export default addIDCard;