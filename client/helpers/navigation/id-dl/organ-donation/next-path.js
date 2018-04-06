'use strict';
import { altFlow }                  from '../../../data/pathnames';
import { requireGuardianSignature } from '../../../data/youth';
import { ageChecks }                from '../../../calculate-age';

export const organDonationPath = (props) => {
  let key = 'summary';
  if (!altFlow(props)) {
    key = 'citizenship';
    if (requireGuardianSignature(props)) {
      key = 'guardianSignature';
    } else if (ageChecks.Under16(props)) {
      key = 'summary';
    }
  }

  return key;
};
