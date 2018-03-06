'use strict';

function medicalHistories(medical_histories) {
  if(medical_histories){
    return {
      hasMedicalCondition:  'Yes',
      medicalInfo:          medical_histories.description
    };
  }
  else{
    return {
      hasMedicalCondition:  'No',
      medicalInfo:          ''
    };
  }
}

module.exports = medicalHistories;