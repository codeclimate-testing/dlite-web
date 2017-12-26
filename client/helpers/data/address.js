'use strict'

import * as dataPresent      from '../data-present';
import { hasValue }          from '../data/validations';

export const canContinue = (props) => {
  let address = props.homeAddress.homeAddressSameAsMailing !== 'No' ? props.homeAddress : props.mailingAddress;
  let hasAddress = dataPresent.address(address);
  return hasAddress && hasValue(props.homeAddress.homeAddressSameAsMailing);
};
