'use strict';

const myBasics = [
  {
    key: 'cdlLegalName',
    description: 'Legal Name',
    path: '/true-name',
    next: 'cdlDateOfBirth'
  },
  {
    key: 'cdlDateOfBirth',
    description: 'Date of Birth',
    path: '/date-of-birth',
    next: 'cdlWdywtdt'
  },
  {
    key: 'cdlSexEyeHair',
    description: 'Physical Traits',
    path: '/physical-traits',
    next: 'cdlHeightWeight'
  },
  {
    key: 'cdlHeightWeight',
    description: 'Height and Weight',
    path: '/traits-height-weight',
    next: 'cdlCertification'
  }
];

export default myBasics;
