'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';

import handlers                   from '../../helpers/handlers';
import { CurrentCardValidator}    from '../../helpers/validations';
import { updateCurrentCardInfo }  from '../../actions/index';
import Presentation               from '../../presentations/get-started/current-card-page.jsx';
import { getCorrectApp }          from '../../helpers/data/card-type';

const Page = (props) => {
  let locale = props.locale;
  let currentCardValidation = new CurrentCardValidator(Object.assign(props.currentCardInfo, {locale}), props.validations);
  let onSubmit = handlers.navigateOrShowErrors(props.addressName, props, currentCardValidation);
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
    IDApp             : state.application.IDApp,
    cardAction        : state.application.cardAction,
    dateOfBirth       : state.application.basics.dateOfBirth,
    validations       : state.ui.validations,
    locale            : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCurrentCardInfo, Page);

