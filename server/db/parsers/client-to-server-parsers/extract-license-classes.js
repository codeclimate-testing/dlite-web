'use strict';

function extractLicenseClasses(data) {
  let license_classes = [];

  data.DLApp.licenseType.endorsement.forEach(function(item) {
    license_classes.push({
      type: item
    });
  });

  data.DLApp.licenseType.type.forEach(function(item) {
    license_classes.push({
      type: item
    });
  });

  return license_classes;
}

module.exports = extractLicenseClasses;