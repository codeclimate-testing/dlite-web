'use strict';

function getLicenseType(license_classes) {
  let licenseType = {
    type: [],
    needEndorsement: ''
  };
  if(license_classes.length > 0){
    license_classes.forEach(item => {

      if(item.type === 'firefighter') {
        licenseType.needEndorsement = 'Yes';
      } else {
        licenseType.type.push(item.type);
      }

    });
  }
  return licenseType;
}

module.exports = getLicenseType;