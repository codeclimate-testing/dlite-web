'use strict';

function getCDLType(license_classes){

  let licenseObject = {
    classM: '',
    licenseClass: '',
    certification: '',
    cdlEndorsements : {
      type          : [],
      needEndorsement: ''
    },
    cdlCertificates : {
      type          : [],
      needCertificates: ''
    }
  };

  let endorsementsArray = ['doubleTriple', 'tank', 'passengerVehicle', 'schoolBus', 'hazmat', 'tankHazmat', 'firefighter'];
  let certificatesArray = ['transit', 'ambulance', 'ham'];
  let certificationArray = ['inter', 'intra'];
  let licenseClassArray    = ['classA', 'classB', 'classC'];

  license_classes.forEach(item => {
    if(item.type === 'motorcycle') {
      licenseObject.classM = 'Yes';
    }
    else if (certificationArray.includes(item.type)) {
      licenseObject.certification = item.type;
    }
    else if (licenseClassArray.includes(item.type)) {
      licenseObject.licenseClass = item.type;
    }
    else if (certificatesArray.includes(item.type)) {
      licenseObject.cdlCertificates.needCertificates = 'Yes';
      licenseObject.cdlCertificates.type.push(item.type);
    }
    else if (endorsementsArray.includes(item.type)){
      licenseObject.cdlEndorsements.needEndorsement = 'Yes';
      licenseObject.cdlEndorsements.type.push(item.type);
    }

  });

  return licenseObject;
}

module.exports = getCDLType;