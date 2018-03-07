'use strict';

function extractLicenseClasses(data) {
  let license_classes = [];

  data.DLApp.licenseType.type.forEach(function(item) {
    license_classes.push({
      type: item
    });
  });

  const firefighter = data.DLApp.licenseType.needEndorsement;
  if(firefighter.length > 0){
    license_classes.push({
      type: `firefighter-${firefighter}`
    })
  };

  return license_classes;
}

module.exports = extractLicenseClasses;