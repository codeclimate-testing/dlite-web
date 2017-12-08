module.exports.createDateString = function(date) {
  return date.month + '/' + date.day + '/' + date.year;
}

module.exports.createDateJson = function(date) {
  let _date = date.split('/');
  return {
    month:  _date[0],
    day:    _date[1],
    year:   _date[2]
  }
}

const voterChoiceMap = {
  "new": {opted_out: 'No', type: 'new'},
  "existing": {opted_out: 'No', type: 'existing'},
  "opt-out": {opted_out: 'Yes', type: 'existing'}
};

module.exports.optedStrToValues = function(radioValue) {
  const nullChoices = {opted_out: null, type: null}
  return voterChoiceMap[radioValue] || nullChoices;
}

module.exports.optedValuesToStr = function(record) {
  return Object.keys(voterChoiceMap).find((value) => {
    let opts = voterChoiceMap[value];
    return (
      opts.opted_out === record.opted_out &&
      opts.type === record.type
    );
  });
}

module.exports.strToBool = function(val) {
  return val === 'Yes' ? true : false;
}

module.exports.boolToStr = function (val) {
  return val ? 'Yes' : 'No';
}
