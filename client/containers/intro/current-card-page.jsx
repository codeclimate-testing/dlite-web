'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import handlers                   from '../../helpers/handlers';
import * as dataPresent           from '../../helpers/data-present';

import { updateCurrentCardInfo }  from '../../actions/index';
import Presentation               from '../../presentations/intro/current-card-page.jsx';

const Page = (props) => {
  let continueDisabled  = !(dataPresent.currentCardInfo(props.currentCardInfo));
  let nextAddress       = props.cardAction === 'change' ? '/updates-and-corrections' : '/real-id';
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
    cardType:         state.application.cardType
  };
};

export default connectForm(mapStateToProps, updateCurrentCardInfo, Page);

