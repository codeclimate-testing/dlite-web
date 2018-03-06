'use strict';

function namesHistories(previous_names) {
  if(previous_names && previous_names.length > 0){
    let _names = previous_names[0].name;
    for(var i = 1; i < previous_names.length; i++ ) {
      _names = _names + ', ' + previous_names[i].name;
    }
    return {
      hasUsedPreviousNames: 'Yes',
      previousNames:        _names
    };
  }
  else{
    return {
      hasUsedPreviousNames: 'No',
      previousNames:        ''
    };
  }
}

module.exports = namesHistories;