'use strict';
const parserHelper          = require('../data-parser');

function veteransService(veterans_info) {
  if(veterans_info){
    let label = 'No';
    if(veterans_info.labeling === 'add'){
      label = 'Yes';
    }
    return {
      isVeteran:            'Yes',
      receiveBenefits:      parserHelper.boolToStr(veterans_info.has_requested_information),
      previouslyDesignated: parserHelper.boolToStr(veterans_info.previously_designated),
      veteransIdentifier:   label
    };
  }
  else{
    return {
      isVeteran:            'No',
      receiveBenefits:      '',
      veteransIdentifier:   '',
      previouslyDesignated: ''
    };
  }
}

module.exports = veteransService;