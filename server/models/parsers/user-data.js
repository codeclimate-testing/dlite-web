'use strict';
const dataParser = require('./data-parser');


module.exports = function parseUserData(records){
  let appsLength = records.applications.length;
  let apps = [];

  records.applications.forEach((app) => {
    let cardAction = [];
    let cardType = [];

    let name = dataParser.buildName(app);
    let id = app.id;
    let updatedAt = app.updated_at;

    let cards = records.cards.filter((card) => {
      return card.application_id === app.id;
    });

    if (cards) {
      cards.forEach((card) => {
        cardType.push(card.type);

        let action = records.card_options.find(option => {
          return option.option_type === 'action' && option.card_id === card.id;
        });

        if (action) {
          cardAction.push(action.option_value);
        }
      });
    }

    apps.push({
      name,
      cardAction,
      cardType,
      id,
      updatedAt
    });

  });

  return {
    appsLength,
    apps
  }
}