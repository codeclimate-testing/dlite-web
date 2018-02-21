'use strict';
const parserHelper          = require('../../../helpers/data-parser');

function extractOrganDonation(data) {
  if(data.organDonation.donateOrgan === '' || data.organDonation.donateMoney === '') { return null; }
  return {
    application_id:   data.id,
    donating_organs:  parserHelper.strToBool(data.organDonation.donateOrgan),
    donating_money:   parserHelper.strToBool(data.organDonation.donateMoney)
  };
}

module.exports = extractOrganDonation;