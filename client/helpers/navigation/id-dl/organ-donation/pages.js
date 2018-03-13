'use strict';

import { organDonationPath }    from './next-path';
import {
  applyEditOrAddPath
} from '../../../data/pathnames';

const organDonation = [
  {
    key: 'organDonation',
    description: 'Organ donation',
    path: applyEditOrAddPath('/organ-donation'),
    next: organDonationPath
  }
];

export default organDonation;