'use strict';

import { TYPES } from '../actions';

export const cardTypeAction = (action) => {
  return action.type === TYPES.UPDATE_CARD_TYPE ||
    action.type === TYPES.UPDATE_CARD_ACTION ||
    action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD ||
    action.type === TYPES.ADD_APP;
};