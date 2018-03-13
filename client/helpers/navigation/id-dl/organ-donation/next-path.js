'use strict';
import { altFlow }                  from '../../../data/pathnames';
import { under16GuardianSignature } from '../../../data/youth';

export const organDonationPath = (props) => {
  let key = 'summary';
  if (!altFlow(props)) {
    key = 'citizenship';
    if (under16GuardianSignature(props)) {
      key = 'guardianSignature';
    }
  }

  return key;
};
