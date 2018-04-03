'use strict';
import { hasValue }       from '../data/validations';
import { getData }        from '../../actions/api-actions';
import {
  addApp,
  updateCardType,
  updateCardAction
 } from '../../actions';

export default (dispatch) =>  {
  return (flow, cardType, appID, history) => {
    dispatch(addApp(flow));

    // if clicking button on /apply/open-applications page, load the selected app's data
    if (hasValue(appID)) {
      dispatch(getData(appID))
        .then((err, res) => {
          if (err) {
            return history.goBack();
          }
        });
    }

    // if adding a new card, clear the cardAction
    if (flow === 'add') {
      dispatch(updateCardAction('newFlow', ''));
    }

    // if a cardType is included, update the cardType, DLApp.isApplying, and IDApp.isApplying
    if (hasValue(cardType)) {
      dispatch(updateCardType('addFromSummary', cardType));
    }
  };
};