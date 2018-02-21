'use strict';
const parserHelper      = require('../../../helpers/data-parser');

function extractApplication(data) {
  let basics            = data.basics;
  let legalName         = basics.legalName || {};
  let heightWeight      = basics.traitsHeightWeight || {};
  let physicalTraits    = basics.physicalTraits || {};
  let language          = basics.language.appLanguage || '';
  let dob               = null;
  let socialSecurity    = 'No';

  if(parserHelper.createDateString(basics.dateOfBirth)) {
    dob = new Date(parserHelper.createDateString(basics.dateOfBirth));
  }

  if(basics.socialSecurity.hasSocialSecurity === 'Yes'){
    let _socialSecurity = basics.socialSecurity;
    socialSecurity = _socialSecurity.part1+'-'+_socialSecurity.part2+'-'+_socialSecurity.part3;
  }

  return {
    id:                       data.id,
    language:                 language,
    first_name:               legalName.firstName,
    middle_name:              legalName.middleName,
    last_name:                legalName.lastName,
    suffix_name:              legalName.suffix,
    date_of_birth:            dob,
    hair_color:               physicalTraits.hairColor,
    eye_color:                physicalTraits.eyeColor,
    sex:                      physicalTraits.sex,
    height_feet:              heightWeight.heightFeet ? heightWeight.heightFeet : 0,
    height_inches:            heightWeight.heightInches ? heightWeight.heightInches : 0,
    weight:                   heightWeight.weight ? heightWeight.weight : 0,
    social_security_number:   socialSecurity
  };
}

module.exports = extractApplication;