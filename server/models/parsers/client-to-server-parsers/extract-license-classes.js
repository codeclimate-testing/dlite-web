'use strict';
const cardTypeParser        = require('../card-type');

function addLicenseClasses(licenseType, classArray) {
  licenseType.type.forEach(function(item) {
    classArray.push({
      type: item
    });
  });
  return classArray;
};

function extractLicenseClasses(data) {
  let license_classes = [];

  if (cardTypeParser.isIDDLApp(data)) {
    license_classes = addLicenseClasses(data.DLApp.licenseType, license_classes);

    const firefighter = data.DLApp.licenseType.needEndorsement;
    if(firefighter === 'Yes'){
      license_classes.push({
        type: 'firefighter'
      });
    }
  }
  else {
    license_classes.push({
      type: data.licenseClass
    });
    license_classes.push({
      type: data.certification
    });
    if (cardTypeParser.addingMotorcycle(data)) {
      license_classes.push({
        type: 'motorcycle'
      });
    }
    license_classes = addLicenseClasses(data.cdlEndorsements, license_classes);
    license_classes = addLicenseClasses(data.cdlCertificates, license_classes);
  }

  return license_classes;
}

module.exports = extractLicenseClasses;