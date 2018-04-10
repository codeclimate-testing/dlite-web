'use strict';
import { hasValue }       from '../data/validations';
import {
  addApp,
  updateCardType,
  updateCardAction
 } from '../../actions';

export default (dispatch) =>  {
  return (flow, cardType) => {

    dispatch(addApp(flow));

    // if adding a new card, clear the cardAction
    if (flow === 'add') {
      dispatch(updateCardAction('newFlow', ''));
    }

    // if a cardType is included, update the cardType, DLApp.isApplying, and IDApp.isApplying
    if (hasValue(cardType)) {
      dispatch(updateCardType('addFromSummary', cardType));
    }

    return;
  };
};