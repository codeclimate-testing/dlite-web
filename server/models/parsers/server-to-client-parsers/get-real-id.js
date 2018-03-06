'use strict';


function realID(card_options, cards) {
  let realIDVal = '';

  card_options.forEach((option) => {
    if(option.option_value === 'real-id') {
      realIDVal = 'Yes';
    }
  });

  return realIDVal;
}

module.exports = realID;