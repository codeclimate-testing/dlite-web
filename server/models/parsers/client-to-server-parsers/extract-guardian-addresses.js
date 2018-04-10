'use strict';

function extractGuardianAddresses(data) {
  if(!data.guardianSignature || data.guardianSignature.isSigned !== 'signElectronically') { return null; }

  let content = [];

  content.push (
    {
      guardian_id:        '',
      guardian_type:      'first',
      street_address_1:   data.guardianSignature.guardianInfo[0].address.street_1,
      street_address_2:   data.guardianSignature.guardianInfo[0].address.street_2,
      city:               data.guardianSignature.guardianInfo[0].address.city,
      state:              data.guardianSignature.guardianInfo[0].address.state,
      zip:                data.guardianSignature.guardianInfo[0].address.zip
    }
  );

  if(data.guardianSignature.guardianInfo[1].acceptLiabilities){
    content.push(
      {
        guardian_id:        '',
        guardian_type:      'second',
        street_address_1:   data.guardianSignature.guardianInfo[1].address.street_1,
        street_address_2:   data.guardianSignature.guardianInfo[1].address.street_2,
        city:               data.guardianSignature.guardianInfo[1].address.city,
        state:              data.guardianSignature.guardianInfo[1].address.state,
        zip:                data.guardianSignature.guardianInfo[1].address.zip
      }
    );
  }

  return content;
}

module.exports = extractGuardianAddresses;