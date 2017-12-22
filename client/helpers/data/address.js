'use strict'
import * as dataPresent      from '../data-present';

export const canContinue = (props) => {
  let address = props.homeAddress.homeAddressSameAsMailing !== 'No' ? props.homeAddress : props.mailingAddress;
  let hasAddress = dataPresent.address(address);
  return hasAddress && dataPresent.value(props.homeAddress.homeAddressSameAsMailing);
};