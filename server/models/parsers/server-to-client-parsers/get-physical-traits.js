'use strict';

function physicalTraits(application) {
  return {
    hairColor:    application.hair_color,
    eyeColor:     application.eye_color,
    sex:          application.sex
  };
}

module.exports = physicalTraits;