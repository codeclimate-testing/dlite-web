'use strict';

import selectionValidator from './selection-validator';

export default {
  donateOrgan: selectionValidator('organDonationSelectionMissing', 'donateOrgan'),
  donateMoney: selectionValidator('moneyOrganDonationSelectionMissing', 'donateMoney')
};
