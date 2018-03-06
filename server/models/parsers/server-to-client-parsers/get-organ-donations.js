'use strict';
const parserHelper          = require('../data-parser');


function organDonations(organ_donations) {
  let organDonation = {
    donateOrgan: '',
    donateMoney: ''
  }
  if(organ_donations) {
    organDonation.donateOrgan = parserHelper.boolToStr(organ_donations.donating_organs),
    organDonation.donateMoney = parserHelper.boolToStr(organ_donations.donating_money)
  }
  return organDonation;
}


module.exports = organDonations;