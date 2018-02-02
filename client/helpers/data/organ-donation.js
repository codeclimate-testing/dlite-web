'use strict';

export const donateMoney = (props) => {
  return props.organDonation.donateMoney === 'Yes';
};

export const donateOrganYes = (props) => {
  return props.organDonation.donateOrgan === 'Yes';
};

export const donateOrganNo = (props) => {
  return props.organDonation.donateOrgan === 'No';
};