'use strict'

export const addressToCheck = (props) => {
  return props.homeAddress.homeAddressSameAsMailing === 'Yes' ? props.homeAddress : props.mailingAddress;
};