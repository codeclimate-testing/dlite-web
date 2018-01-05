'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import handlers                   from '../../helpers/handlers';
import * as dataPresent           from '../../helpers/data-present';

import { updateCurrentCardInfo }  from '../../actions/index';
import Presentation               from '../../presentations/intro/current-card-page.jsx';

const Page = (props) => {
  let continueDisabled  = !(dataPresent.currentCardInfo(props.currentCardInfo));
  let onSubmit          = handlers.navigateOnSubmit('/real-id', props);
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
    cardType:         state.application.cardType
  };
};

export default connectForm(mapStateToProps, updateCurrentCardInfo, Page);

