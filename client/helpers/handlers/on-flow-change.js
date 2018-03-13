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

    if (flow === 'add') {
      dispatch(updateCardAction('newFlow', ''));
    }

    if (hasValue(cardType)) {
      dispatch(updateCardType('addFromSummary', cardType));
    }
  };
};