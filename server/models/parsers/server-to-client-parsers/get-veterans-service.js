'use strict';
const parserHelper          = require('../data-parser');

function veteransService(veterans_info, addMilitaryWaiver) {
  let veteransObject = {
    isVeteran             : '',
    receiveBenefits       : parserHelper.boolToStr(veterans_info.has_requested_information),
    previouslyDesignated  : parserHelper.boolToStr(veterans_info.previously_designated),
    veteransIdentifier    : ''
  }

  if(veterans_info){
    let label = 'No';
    if(veterans_info.labeling === 'add'){
      label = 'Yes';
    }
    veteransObject.isVeteran = 'Yes';
    veteransObject.veteransIdentifier = label;
  }
  else{
    veteransObject.isVeteran = 'No';
  }

  if(addMilitaryWaiver){
    veteransObject.militaryWaiver = parserHelper.boolToStr(veterans_info.military_waiver)
  }
  return veteransObject;
}

module.exports = veteransService;