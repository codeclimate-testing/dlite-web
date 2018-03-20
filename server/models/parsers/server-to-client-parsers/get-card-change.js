'use strict';

function getCardChange(option) {
  let value = option.option_value.split('-');
  return {
    correctOrUpdate: value[1],
    sections: value[2].split('_'),
    other: value[3]
  }
}

module.exports = getCardChange;