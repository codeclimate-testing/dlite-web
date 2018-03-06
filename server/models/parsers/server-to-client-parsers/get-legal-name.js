'use strict';

function legalName(application) {
  return {
    firstName:  application.first_name,
    middleName: application.middle_name,
    lastName:   application.last_name,
    suffix:     application.suffix_name
  };
}

module.exports = legalName;
