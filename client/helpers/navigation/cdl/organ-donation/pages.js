'use strict';
import {
  nextOrCDLSummary,
  applyOrEditCDLPath
} from '../../../data/pathnames';

const organDonation = [
  {
    key: 'cdlOrganDonation',
    description: 'Organ donation',
    path: applyOrEditCDLPath('/organ-donation'),
    next: nextOrCDLSummary('cdlCitizenship')
  }
];

export default organDonation;
