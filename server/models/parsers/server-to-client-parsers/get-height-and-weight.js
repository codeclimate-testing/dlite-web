'use strict';

function heightAndWeight(application) {
  return {
    weight:       application.weight + '',
    heightFeet:   application.height_feet + '',
    heightInches: application.height_inches + ''
  };
}

module.exports = heightAndWeight;