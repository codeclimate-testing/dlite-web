'use strict';

function getCardReplacement(option) {
  let value = option.option_value.split('-');
  return {
    reason: value[1]
  }
}

module.exports = getCardReplacement;
