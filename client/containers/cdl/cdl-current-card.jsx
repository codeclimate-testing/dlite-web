'use strict';

import React                      from 'react';
import connectForm                from '../../helpers/connect-form';
import handlers                   from '../../helpers/handlers';
import { CurrentCardValidator}    from '../../helpers/validations';
import { updateCurrentCDL }       from '../../actions/index';
import Presentation               from '../../presentations/get-started/current-card-page.jsx';


const Page = (props) => {
  let locale = props.locale;
  let validations = new CurrentCardValidator(Object.assign(props.currentCardInfo, {locale}), props.validations);
  let onSubmit = handlers.navigateOrShowErrors(props.addressName, props, validations);
  let onBack   = handlers.navigateOnBack(props, validations);
  return (
    <Presentation
      {...props}
      onSubmit                = { onSubmit }
      onBack                  = { onBack }
      validations             = { validations }
      onBlur                  = { props.onBlurValidate }
      onFocus                 = { props.onFocusClearValidation }
    />
  );
};

function mapStateToProps(state) {
  return {
    currentCardInfo   : state.cdl.currentCardInfo,
    cardType          : state.application.cardType,
    IDApp             : state.application.IDApp,
    cardAction        : state.application.cardAction,
    dateOfBirth       : state.application.basics.dateOfBirth,
    validations       : state.ui.validations,
    locale            : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCurrentCDL, Page);

