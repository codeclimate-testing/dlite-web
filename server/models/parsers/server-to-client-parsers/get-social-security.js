'use strict';

function socialSecurity(application) {
  let social_security = '';
  if(application.social_security_number) {
    let _parts = application.social_security_number.split('-');
    social_security = {
      part1:              _parts[0],
      part2:              _parts[1],
      part3:              _parts[2],
      hasSocialSecurity:  'Yes'
    }
  }
  return social_security;
}
module.exports = socialSecurity;