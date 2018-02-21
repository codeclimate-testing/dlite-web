'use strict';
const parserHelper          = require('../../../helpers/data-parser');

function extractVeteransInfo(data) {
  if(data.history.veteransService.isVeteran === 'Yes'){
    let label = null;

    if(data.history.veteransService.veteransIdentifier === 'Yes'){
      label = 'add';
    }
    if(data.history.veteransService.previouslyDesignated === 'Yes' && data.history.veteransService.veteransIdentifier === 'No' ) {
      label = 'remove';
    }

    return {
      application_id:               data.id,
      has_requested_information:    parserHelper.strToBool(data.history.veteransService.receiveBenefits),
      previously_designated:        parserHelper.strToBool(data.history.veteransService.previouslyDesignated),
      labeling:                     label
    };
  }
  else {  return null; }

}

module.exports = extractVeteransInfo;