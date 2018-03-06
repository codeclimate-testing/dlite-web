'use strict';
import {
  nextOrCDLSummary,
  applyOrEditCDLPath
} from '../../../data/pathnames';

const cdlHistory = [
  {
    key: 'cdlMedical',
    description: 'medical history',
    path: applyOrEditCDLPath('/my-history/medical'),
    next: nextOrCDLSummary('cdlNameHistory')
  },
  {
    key: 'cdlNameHistory',
    description: 'Names History',
    path: applyOrEditCDLPath('/my-history/names'),
    next: nextOrCDLSummary('cdlLicenseIssues')
  },
  {
    key: 'cdlLicenseIssues',
    description: 'License Issues',
    path: applyOrEditCDLPath('/my-history/issues'),
    next: nextOrCDLSummary('cdlOtherStateLicenses')
  },
  {
    key: 'cdlOtherStateLicenses',
    description: 'Other State Licenses',
    path: applyOrEditCDLPath('/my-history/other-state-licenses'),
    next: nextOrCDLSummary('cdlVeterans')
  },
  {
    key: 'cdlVeterans',
    description: 'Veterans Service',
    path: applyOrEditCDLPath('/my-history/veteran'),
    next: nextOrCDLSummary('cdlOrganDonation')
  }

];

export default cdlHistory;
