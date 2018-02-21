'use strict';

function extractPreviousNames(data) {
  let _previousNames  = data.history.namesHistory;
  let names          = [];
  if( _previousNames.hasUsedPreviousNames === 'Yes') {
    let tokens = _previousNames.previousNames.split(',');
    tokens.forEach(function (token){
      token = token.trim();
      if(token){
        names.push(
          {
            application_id: data.id,
            name:           token
          }
        );
      }
    });
    return names;
  }
  else {
    return null;
  }
}

module.exports = extractPreviousNames;