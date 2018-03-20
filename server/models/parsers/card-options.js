'use strict';


function cardOptionsGenerator(cards, card_options) {
  let cardOptionsForDB = [];
  if(cards.length > 0) {
    cards.forEach( card => {
      card_options.forEach( option => {
        if(card.type === option.type) {
          cardOptionsForDB.push({
            card_id:      card.id,
            option_type:  option.option_type,
            option_value: option.option_value
          })
        }
      });
    });
  }
  return cardOptionsForDB;
}

function licenseClassGenerator(cards, license_classes) {
  let licenseClassesForDB = [];
  if(cards.length > 0) {
    cards.forEach( card => {
      if(card.type === 'DL' || card.type === 'CDL') {
        license_classes.forEach(license_class => {
          licenseClassesForDB.push({
            card_id:  card.id,
            type:     license_class.type
          })
        })
      }
    });
  }
  return licenseClassesForDB;
};

module.exports = {
  cardOptionsGenerator,
  licenseClassGenerator
};

