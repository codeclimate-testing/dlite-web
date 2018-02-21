'use strict';
const cardTypeParser        = require('../../../helpers/card-type');

function extractCardOptions(data) {
  let cardOptions = [ ];

  //////----------- DRIVER LICENSE OPTIONS ---------/////////
  if (cardTypeParser.hasDL(data.DLApp)) {
    cardOptions.push({
      type        : 'DL',
      option_type : 'action',
      option_value: data.DLApp.action
    });

    // changing and replacing DL
    if (cardTypeParser.getChange(data.DLApp.action)) {
      let correctOrUpdate = data.DLApp.cardChanges.correctOrUpdate;
      let changes = data.DLApp.cardChanges.sections.join('_');
      cardOptions.push({
        type:               'DL',
        option_type:        'modification',
        option_value:       'change-' + correctOrUpdate + '-' + changes + '-' + data.DLApp.cardChanges.other
      });
    }
    else if (cardTypeParser.getReplace(data.DLApp.action)) {
      cardOptions.push({
        type:               'DL',
        option_type:        'modification',
        option_value:       'replace-' + data.DLApp.replacementDetails.reason
      });
    }
  }

  //////-----  ID OPTIONS --------------//////////////////
  if (cardTypeParser.hasID(data.IDApp)) {
    cardOptions.push({
      type        : 'ID',
      option_type : 'action',
      option_value: data.IDApp.action
    });

    // changing and replacing ID
    if (cardTypeParser.getChange(data.IDApp.action)) {
      let correctOrUpdate = data.IDApp.cardChanges.correctOrUpdate;
      let changes = data.IDApp.cardChanges.sections.join('_');
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'change-' + correctOrUpdate + '-' + changes + '-' + data.cardChanges.other
      });
    }
    else if (cardTypeParser.getReplace(data.IDApp.action)) {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'replace-' + data.IDApp.replacementDetails.reason
      });
    };

    // reduced fee
    if(data.IDApp.reducedFee.ID === 'Yes' && data.IDApp.reducedFee.form === 'Yes') {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'reduced-fee-has-form'
      })
    } else if(data.IDApp.reducedFee.ID === 'Yes' && !data.IDApp.reducedFee.form === 'Yes') {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'reduced-fee-no-form'
      })
    };

    // senior ID
    if(data.IDApp.seniorID=== 'Yes') {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'senior-id'
      })
    };
  };

  ////////// REAL ID ///////////////
  if(data.realID.getRealID === 'Yes'){
    var hasID = cardTypeParser.hasID(data.IDApp);
    var hasDL = cardTypeParser.hasDL(data.DLApp);
    var designation = hasID && hasDL ? data.realID.realIdDesignation : hasID ? 'ID' : 'DL';

    cardOptions.push({
      type:               data.realID.realIdDesignation,
      option_type:        'modification',
      option_value:       'real-id'
    });
  };

  return cardOptions;
};

module.exports = extractCardOptions;