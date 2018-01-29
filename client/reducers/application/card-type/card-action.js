'use strict';
import { hasMultipleCards }   from  '../../../helpers/data/cards';
import {
  getDL,
  getID
}   from '../../../helpers/data/card-type';

const cardAction = (value, data, blankState) => {

  if (hasMultipleCards({cardType: data})) {
    if (data.cardAction === 'new') {
      // changing cardAction from new when both card types selected clears the isApplying
      return Object.assign({}, blankState, {cardAction: value}) // make change to the defaultState. ID and DL objects are reset and cardType must be chosen.
    }

    // else updating the action on just one of the two cards. need to figure this out.
    // perhaps going to the cardAction page from the summary screen changes the name of the radio collection
  }

  // otherwise, we are working with only one card and can just update that card's action to whatever the new value is
  let updateID = {
    isApplying: data.ID.isApplying,
    action: getID({cardType:data}) ? value : data.ID.action
  };

  let updateDL = {
    isApplying: data.DL.isApplying,
    action: getDL({cardType: data}) ? value : data.DL.action
  };

  // make change to the current data state, updating cardAction and the actions of any existing ID and DL application
  return Object.assign({}, data, {cardAction: value, ID: updateID, DL: updateDL});
};

export default cardAction;