'use strict';
const cardTypeParser        = require('../../../helpers/card-type');

function CardOption(card, type, value) {
  this.type = card;
  this.option_type = type;
  this.option_value = value;
};

function changeCard(cardChanges) {
  let correctOrUpdate = cardChanges.correctOrUpdate;
  let changes         = cardChanges.sections.join('_');
  let value           = 'change-' + correctOrUpdate + '-' + changes + '-' + cardChanges.other;
  return value;
};

function replaceCard(app) {
  let value = 'replace-' + app.replacementDetails.reason;
  return value;
};

function extractCardOptions(data) {
  let cardOptions = [ ];

  //////----------- DRIVER LICENSE OPTIONS ---------/////////
  if (cardTypeParser.hasDL(data.DLApp)) {
    cardOptions.push(new CardOption('DL', 'action', data.DLApp.action));

    // changing and replacing DL
    if (cardTypeParser.getChange(data.DLApp.action)) {
      let value = changeCard(data.DLApp.cardChanges);
      cardOptions.push(new CardOption('DL', 'modification', value));
    }
    else if (cardTypeParser.getReplace(data.DLApp.action)) {
      let value = replaceCard(data.DLApp);
      cardOptions.push(new CardOption('DL', 'modification', value));
    }

    // real ID
    if (data.DLApp.realID === 'Yes') {
      cardOptions.push(new CardOption('DL', 'modification', 'real-id'));
    }
  }

  //////-----  ID OPTIONS --------------//////////////////
  if (cardTypeParser.hasID(data.IDApp)) {
    cardOptions.push(new CardOption('ID', 'action', data.IDApp.action));

    // changing and replacing ID
    if (cardTypeParser.getChange(data.IDApp.action)) {
      let value = changeCard(data.IDApp.cardChanges);
      cardOptions.push(new CardOption('ID', 'modification', value));
    }
    else if (cardTypeParser.getReplace(data.IDApp.action)) {
      let value = replaceCard(data.IDApp);
      cardOptions.push(new CardOption('DL', 'modification', value));
    };

    // reduced fee
    if(data.IDApp.reducedFee.ID === 'Yes' && data.IDApp.reducedFee.form === 'Yes') {
      cardOptions.push(new CardOption('ID', 'modification', 'reduced-fee-has-form'));

    } else if(data.IDApp.reducedFee.ID === 'Yes' && !data.IDApp.reducedFee.form === 'Yes') {
      cardOptions.push(new CardOption('ID', 'modification', 'reduced-fee-no-form'));
    };

    // senior ID
    if(data.IDApp.seniorID=== 'Yes') {
      cardOptions.push(new CardOption('ID', 'modification', 'senior-id'));
    };

    // real ID
    if (data.IDApp.realID === 'Yes') {
      cardOptions.push(new CardOption('ID', 'modification', 'real-id'));
    }
  };

  return cardOptions;
};

module.exports = extractCardOptions;