'use strict';

import { socialSecurity } from './next-path';

const myBasics = [
  {
    key: 'addresses',
    description: 'Addresses',
    path: '/my-basics/address',
    next: 'sexEyeHair'
  },
  {
    key: 'sexEyeHair',
    description: 'Physical traits',
    path: '/my-basics/physical-traits',
    next: 'heightWeight'
  },
  {
    key: 'heightWeight',
    description: 'Height and weight',
    path: '/my-basics/traits-height-weight',
    next: 'socialSecurity'
  },
  {
    key: 'socialSecurity',
    description: 'Social security',
    path: '/my-basics/social-security',
    next: socialSecurity
  }
];

export default myBasics