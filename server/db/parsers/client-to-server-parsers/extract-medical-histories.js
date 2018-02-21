'use strict';

function extractMedicalHistories(data) {
  if(data.history.medicalHistory.hasMedicalCondition === 'Yes') {
    return {
      application_id:   data.id,
      description:      data.history.medicalHistory.medicalInfo
    };
  }
  else { return null; }
}

module.exports = extractMedicalHistories;