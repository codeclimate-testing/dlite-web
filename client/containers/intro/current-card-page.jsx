'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import handlers                   from '../../helpers/handlers';
import * as dataPresent           from '../../helpers/data-present';

import { updateCurrentCardInfo }  from '../../actions/index';
import Presentation               from '../../presentations/intro/current-card-page.jsx';

import { eligibleForSeniorID }    from '../../helpers/data/senior';

const Page = (props) => {
  let continueDisabled  = !(dataPresent.currentCardInfo(props.currentCardInfo));
  
  let nextAddress       = '/real-id';
  if(props.cardAction === 'change') {
    nextAddress = '/updates-and-corrections';
  } else if (eligibleForSeniorID(props)) {
    nextAddress = '/senior-id';
  };

  let onSubmit          = handlers.navigateOnSubmit(nextAddress, props);
  let onBack            = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    currentCardInfo:  state.application.currentCardInfo,
    cardAction:       state.application.cardAction,
    cardType:         state.application.cardType,
    dateOfBirth:      state.application.dateOfBirth
  };
};

export default connectForm(mapStateToProps, updateCurrentCardInfo, Page);

