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

module.exports.optedStrToValues = function(str) {
  if( str === 'I am a new voter in California'){
    return {opted_out: 'No', type: 'new'};
  }
  else if( str === 'I am already registered to vote in California'){
    return {opted_out: 'No', type: 'existing'};
  }
  else if( str === 'I am eligible to vote, but do not want to register to vote'){
    return {opted_out: 'Yes', type: 'existing'};
  }
  else{
    return {opted_out: null, type: null};
  }
}

module.exports.optedValuesToStr = function(opted) {
  if( opted.opted_out === 'No' && opted.type === 'new' ){
    return 'I am a new voter in California';
  }
  else if( opted.opted_out === 'No' && opted.type === 'existing' ){
    return 'I am already registered to vote in California';
  }
  else if( opted.opted_out === 'Yes' && opted.type === 'existing' ){
    return 'I am eligible to vote, but do not want to register to vote';
  }
  else{
    return null;
  }
}

module.exports.strToBool = function(val) {
  return val === 'Yes' ? true : false;
}

module.exports.boolToStr = function (val) {
  return val ? 'Yes' : 'No';
}
