'use strict';

import React                        from 'react';
import { connect }                  from 'react-redux';

import handlers                     from '../../helpers/handlers';
import { AddressValidator }         from '../../helpers/validations';

import {
  updateAddress,
  updateMailingAddress,
  updateHomeAddress
 }     from '../../actions/index';

import Presentation                 from '../../presentations/my-basics/address-page.jsx';

const Page = (props) => {
  let validations             = new AddressValidator(props.address, props.validations);
  let onBack                  = handlers.navigateOnBack(props, validations);
  let onSubmit                = handlers.navigateOrShowErrors('addresses', props, validations);

  return (
    <Presentation
      {...props}
      onSubmit              = { onSubmit }
      onBack                = { onBack }
      validations           = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    address:        state.application.address,
    focused:        state.ui.focus,
    validations:    state.ui.validations
  };
}

function mapDispatchToProps(dispatch) {
  const onAddressChange         = handlers.onInputChange(updateAddress, dispatch);
  const onHomeChange            = handlers.onInputChange(updateHomeAddress, dispatch);
  const onMailingChange         = handlers.onInputChange(updateMailingAddress, dispatch);
  const onSubmit                = handlers.onFormSubmit(dispatch);
  const onBlurValidate          = handlers.onBlurValidate(dispatch);
  const onFocusClearValidation  = handlers.onFocusClearValidation(dispatch);
  const onSubmitShowErrors      = handlers.onSubmitShowErrors(dispatch);
  const onFocus                 = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onAddressChange,
    onHomeChange,
    onMailingChange,
    onBlurValidate,
    onFocusClearValidation,
    onSubmitShowErrors,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
