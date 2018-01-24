'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import handlers                   from '../../helpers/handlers';
import { CurrentCardValidator}    from '../../helpers/validations';
import { updateCurrentCardInfo }  from '../../actions/index';
import Presentation               from '../../presentations/get-started/current-card-page.jsx';

const Page = (props) => {
  let currentCardValidation = new CurrentCardValidator(props.currentCardInfo, props.validations);
  let onSubmit = handlers.navigateOrShowErrors('currentCardInfo', props, currentCardValidation);
  let onBack   = handlers.navigateOnBack(props, currentCardValidation);

  return (
    <Presentation
      {...props}
      onSubmit                = { onSubmit }
      onBack                  = { onBack }
      currentCardValidation   = { currentCardValidation }
      onBlur                  = { props.onBlurValidate }
      onFocus                 = { props.onFocusClearValidation }
    />
  );
};

function mapStateToProps(state) {
  return {
    currentCardInfo:  state.application.currentCardInfo,
    cardAction:       state.application.cardAction,
    cardType:         state.application.cardType,
    dateOfBirth:      state.application.dateOfBirth,
    validations:      state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCurrentCardInfo, Page);

