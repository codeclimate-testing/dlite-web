'use strict';

const voterChoiceMap = {
  "new": {opted_out: 'No', type: 'new'},
  "existing": {opted_out: 'No', type: 'existing'},
  "opt-out": {opted_out: 'Yes', type: 'existing'}
};

const nullChoices =  {opted_out: null, type: null};

function uiToRecord(value) {
  return voterChoiceMap[value] || nullChoices;
};

function recordToUi(record) {
  return Object.keys(voterChoiceMap).find((value) => {
    let opts = voterChoiceMap[value];
    return (
      opts.opted_out === record.opted_out &&
      opts.type === record.type
    );
  });
};

module.exports = {
  uiToRecord,
  recordToUi
};

