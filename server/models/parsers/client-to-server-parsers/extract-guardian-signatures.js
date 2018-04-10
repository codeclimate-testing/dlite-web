'use strict';

const parserHelper      = require('../data-parser');

const getSignatureDate = (signature) => {
  if(signature.month && signature.day && signature.year) {
    return new Date(parserHelper.createDateString(signature));
  };
  return null;
};

function extractGuardianSignatures(data) {
  if(!data.guardianSignature || data.guardianSignature.isSigned !== 'signElectronically') { return null; }
  let content = [];
  content.push (
    {
      application_id:           data.id,
      guardian_type:            'first',
      accept_civil_liability:   data.guardianSignature.guardianInfo[0].acceptLiabilities,
      guardian_name:            data.guardianSignature.guardianInfo[0].signature.name,
      signed_on:                getSignatureDate(data.guardianSignature.guardianInfo[0].signature),
      phone_number:             data.guardianSignature.guardianInfo[0].phoneNumber,
    }
  );
  if(data.guardianSignature.guardianInfo[1].acceptLiabilities){
    content.push(
      {
        application_id:           data.id,
        guardian_type:            'second',
        accept_civil_liability:   data.guardianSignature.guardianInfo[1].acceptLiabilities,
        guardian_name:            data.guardianSignature.guardianInfo[1].signature.name,
        signed_on:                getSignatureDate(data.guardianSignature.guardianInfo[1].signature),
        phone_number:             data.guardianSignature.guardianInfo[1].phoneNumber,
      }
    );
  }

  return content;
}

module.exports = extractGuardianSignatures;