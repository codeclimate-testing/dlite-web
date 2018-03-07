'use strict';
const parserHelper          = require('../data-parser');

function extractLicenseIssues(data) {
  if( data.history.licenseIssues.isSuspended === 'Yes'){
    let dateString = parserHelper.createDateString(data.history.licenseIssues);
    return {
      application_id:     data.id,
      description:        data.history.licenseIssues.reason,
      date_description:   dateString
    };
  }
  else{
    return null;
  }
}

module.exports = extractLicenseIssues;
