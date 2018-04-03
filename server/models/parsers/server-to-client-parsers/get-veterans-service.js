'use strict';
const parserHelper          = require('../data-parser');

function veteransService(veterans_info, addMilitaryWaiver) {
  let veteransObject = {
    isVeteran             : '',
    receiveBenefits       : '',
    previouslyDesignated  : '',
    veteransIdentifier    : ''
  }

  if(veterans_info){
    let label = 'No';
    if(veterans_info.labeling === 'add'){
      label = 'Yes';
    }
    if(addMilitaryWaiver){
      veteransObject.militaryWaiver = parserHelper.boolToStr(veterans_info.military_waiver)
    }
    veteransObject.isVeteran = 'Yes';
    veteransObject.receiveBenefits = parserHelper.boolToStr(veterans_info.has_requested_information);
    veteransObject.previouslyDesignated = parserHelper.boolToStr(veterans_info.previously_designated);
    veteransObject.veteransIdentifier = label;
  }
  else{
    veteransObject.isVeteran = 'No';
    if(addMilitaryWaiver){
      veteransObject.militaryWaiver = '';
    }
  }


  return veteransObject;
}

module.exports = veteransService;