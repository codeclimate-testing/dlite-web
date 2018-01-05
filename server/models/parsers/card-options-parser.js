'use strict';


function cardOptions(cards, card_options, data) {
  let _card_id;
  let _card_options_ = [ ];
  let _license_classes_ = [];

  cards.forEach( card => {
    card_options.forEach( option => {
      if(card.type === option.type) {
        _card_options_.push({
          card_id:            card.id,
          option_type:        option.option_type,
          option_value:       option.option_value
        });
      }
    });
    if(card.type === 'DL') {
      _card_id = card.id;
      data.license_classes.forEach( item => {
        _license_classes_.push({
          card_id:    _card_id,
          type:       item.type
        });
      });
      data.license_classes = _license_classes_;
    }
  });
  return data.card_options = _card_options_;
};

module.exports = {
  cardOptions
};

