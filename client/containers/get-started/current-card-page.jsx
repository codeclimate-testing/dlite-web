'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import handlers                   from '../../helpers/handlers';
import { CurrentCardValidator}    from '../../helpers/validations';
import { updateCurrentCardInfo }  from '../../actions/index';
import Presentation               from '../../presentations/get-started/current-card-page.jsx';
import { getCorrectApp }          from '../../helpers/data/card-type';

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
    currentCardInfo   : getCorrectApp(state.application).currentCard,
    cardType          : state.application.cardType,
    cardAction        : state.application.cardAction,
    dateOfBirth       : state.application.basics.dateOfBirth,
    validations       : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCurrentCardInfo, Page);

