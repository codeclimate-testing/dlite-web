'use strict';
import {
  nextOrCDLSummary,
  applyOrEditCDLPath
} from '../../../data/pathnames';

const myBasics = [
  {
    key: 'cdlLegalName',
    description: 'Legal Name',
    path: applyOrEditCDLPath('/true-name'),
    next: nextOrCDLSummary('cdlDateOfBirth')
  },
  {
    key: 'cdlDateOfBirth',
    description: 'Date of Birth',
    path: applyOrEditCDLPath('/date-of-birth'),
    next: nextOrCDLSummary('cdlWdywtdt')
  },
  {
    key: 'cdlSexEyeHair',
    description: 'Physical Traits',
    path: applyOrEditCDLPath('/physical-traits'),
    next: nextOrCDLSummary('cdlHeightWeight')
  },
  {
    key: 'cdlHeightWeight',
    description: 'Height and Weight',
    path: applyOrEditCDLPath('/traits-height-weight'),
    next: nextOrCDLSummary('cdlCertification')
  }
];

export default myBasics;
