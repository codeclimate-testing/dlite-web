'use strict';
const cardTypeParser        = require('../card-type');

function CardOption(card, type, value) {
  this.type = card;
  this.option_type = type;
  this.option_value = value;
}

function changeCard(cardChanges) {
  let correctOrUpdate = cardChanges.correctOrUpdate;
  let changes         = cardChanges.sections.join('_');
  let otherSections   = cardChanges.other.length > 0 ? '-' + cardChanges.other : '';
  let value           = 'change-' + correctOrUpdate + '-' + changes + otherSections;
  return value;
}

function replaceCard(cardReplacement) {
  let value = 'replace-' + cardReplacement.reason;
  return value;
}

function buildCardOptions(name, app, action, cardOptions) {
  cardOptions.push(new CardOption(name, 'action', action));
  if (cardTypeParser.getChange(action)) {
    let value = changeCard(app.cardChanges);
    cardOptions.push(new CardOption(name, 'modification', value));
  }
  else if (cardTypeParser.getReplace(action)) {
    let value = replaceCard(app.cardReplacement);
    cardOptions.push(new CardOption(name, 'modification', value));
  }

  // real ID
  if (app.realID === 'Yes') {
    cardOptions.push(new CardOption(name, 'modification', 'real-id'));
  }

  // reducedFee
  if (app.hasOwnProperty('reducedFee') && app.reducedFee.ID === 'Yes') {
    cardOptions.push(new CardOption('ID', 'modification', 'reduced-fee'));
  }
  // senior ID
  if(app.hasOwnProperty('seniorID') && app.seniorID=== 'Yes') {
    cardOptions.push(new CardOption('ID', 'modification', 'senior-id'));
  }
  return cardOptions;
}

module.exports = buildCardOptions;