'use strict';
import {
  nextOrCDLSummary,
  applyOrEditCDLPath
} from '../../../data/pathnames';

import {
  cdlSSN
} from './next-path';

const myBasics = [
  {
    key: 'cdlSexEyeHair',
    description: 'Physical Traits',
    path: applyOrEditCDLPath('/my-basics/physical-traits'),
    next: nextOrCDLSummary('cdlHeightWeight')
  },
  {
    key: 'cdlHeightWeight',
    description: 'Height and Weight',
    path: applyOrEditCDLPath('/my-basics/traits-height-weight'),
    next: nextOrCDLSummary('cdlCertification')
  },
  {
    key: 'cdlResidency',
    description: 'California residency',
    path: applyOrEditCDLPath('/my-basics/california-residency'),
    next: nextOrCDLSummary('cdlSocialSecurity')
  },
  {
    key: 'cdlSocialSecurity',
    description: 'Social Security',
    path: applyOrEditCDLPath('/my-basics/social-security'),
    next: cdlSSN
  }
];

export default myBasics;
