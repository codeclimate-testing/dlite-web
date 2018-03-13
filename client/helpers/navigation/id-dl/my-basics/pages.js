'use strict';
import {
  nextOrSummary,
  applyEditOrAddPath
} from '../../../data/pathnames';
import { socialSecurity }   from './next-path';

const myBasics = [
  {
    key: 'addresses',
    description: 'Addresses',
    path: applyEditOrAddPath('/my-basics/address'),
    next: nextOrSummary('sexEyeHair'),
    validateFromSummary: true
  },
  {
    key: 'sexEyeHair',
    description: 'Physical traits',
    path: applyEditOrAddPath('/my-basics/physical-traits'),
    next: nextOrSummary('heightWeight'),
    validateFromSummary: true
  },
  {
    key: 'heightWeight',
    description: 'Height and weight',
    path: applyEditOrAddPath('/my-basics/traits-height-weight'),
    next: nextOrSummary('socialSecurity'),
    validateFromSummary: true
  },
  {
    key: 'socialSecurity',
    description: 'Social security',
    path: applyEditOrAddPath('/my-basics/social-security'),
    next: socialSecurity,
    validateFromSummary: true
  }
];

export default myBasics;