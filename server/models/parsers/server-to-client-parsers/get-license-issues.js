'use strict';

const parserHelper          = require('../data-parser');

function licenseIssues(license_issues) {
  if(license_issues){
    let _date = parserHelper.createDateJson(license_issues.date_description);
    return {
      isSuspended:  'Yes',
      month:        _date.month,
      day:          _date.day,
      year:         _date.year,
      reason:       license_issues.description
    };
  }
  else{
    return {
      isSuspended:  'No',
      month:        '',
      day:          '',
      year:         '',
      reason:       ''
    };
  }
}

module.exports = licenseIssues;