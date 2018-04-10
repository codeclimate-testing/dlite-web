'use strict';

function heightAndWeight(application) {
  let stats = {
    weight: '',
    heightFeet: '',
    heightInches: ''
  };
  if (application.height_feet > 0) {
    stats = {
      weight:       application.weight + '',
      heightFeet:   application.height_feet + '',
      heightInches: application.height_inches + ''
    };
  }
  return stats;
}

module.exports = heightAndWeight;