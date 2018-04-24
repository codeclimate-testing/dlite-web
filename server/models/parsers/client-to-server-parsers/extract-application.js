'use strict';
const parserHelper      = require('../data-parser');

function extractApplication(data, ip) {
  let basics            = data.basics;
  let legalName         = basics.legalName || {};
  let heightWeight      = basics.traitsHeightWeight || {};
  let physicalTraits    = basics.physicalTraits || {};
  let language          = basics.language || '';
  let dob               = null;
  let socialSecurity    = '';
  let dateOfBirth       = basics.dateOfBirth;
  let completed         = null;


  if(dateOfBirth.month && dateOfBirth.day && dateOfBirth.year) {
    dob = new Date(parserHelper.createDateString(basics.dateOfBirth));
  };

  if(basics.socialSecurity.hasSocialSecurity === 'Yes'){
    let _socialSecurity = basics.socialSecurity;
    socialSecurity = _socialSecurity.part1+'-'+_socialSecurity.part2+'-'+_socialSecurity.part3;
  } else if (basics.socialSecurity.hasSocialSecurity === 'No') {
    socialSecurity = 'No';
  }

  if(data.pathname === '/apply/id-and-license/summary' || data.pathname === '/apply/cdl/summary') {
    completed = new Date(parserHelper.formatCompletedAtDate(new Date()))
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
    social_security_number:   socialSecurity,
    user_id:                  data.userID,
    pathname:                 data.pathname,
    completed_at:             completed,
    ip_address:               ip
  };
}

module.exports = extractApplication;
