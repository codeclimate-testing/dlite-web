'use strict';
import { altFlow }                  from '../../../data/pathnames';
import {
  requireGuardianSignatureUnder16
} from '../../../data/youth';
import { ageChecks }                from '../../../calculate-age';

export const organDonationPath = (props) => {
  let key = 'summary';
  if (!altFlow(props)) {
    key = 'citizenship';
    if (requireGuardianSignatureUnder16(props)) {
      key = 'guardianSignature';
    } else if (ageChecks.Under16(props.dateOfBirth)) {
      key = 'summary';
    }
  }

  return key;
};
