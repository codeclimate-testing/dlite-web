'use strict';

const voterChoiceMap = {
  "new":        {opted_out: 'No',   type: 'new'},
  "existing":   {opted_out: 'No',   type: 'existing'},
  "opt-out":    {opted_out: 'Yes',  type: 'existing'}
};

function clientToDBMapping(value) {
  return voterChoiceMap[value];
};

function DBToClientMapping(record) {
  return Object.keys(voterChoiceMap).find((value) => {
    let opts = voterChoiceMap[value];
    return (
      opts.opted_out === record.opted_out &&
      opts.type === record.type
    );
  });
};

module.exports = {
  clientToDBMapping,
  DBToClientMapping
};

