'use strict';

import React                  from 'react';
import { connect }            from 'react-redux';

import handlers               from '../../helpers/handlers';
import { NamePageValidator }  from '../../helpers/validations';
import { updateLegalName }    from '../../actions/index';
import Presentation           from '../../presentations/get-started/name-page.jsx';

const Page = (props) => {
  let validations   = new NamePageValidator(props.legalName, props.validations);
  let onBack        = handlers.navigateOnBack(props, validations);
  let onSubmit      = handlers.navigateOrShowErrors('legalName', props, validations);
  return (
    <Presentation
      {...props}
      onSubmit      = { onSubmit }
      onBack        = { onBack }
      validations   = { validations }
      changeAction  = { updateLegalName }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    legalName:    state.application.basics.legalName,
    focused:      state.ui.focus,
    validations:  state.ui.validations,
    hover:        state.ui.hover,
    flow:         state.ui.flow

  };
};

const mapDispatchToProps = (dispatch) => {
  const onSelectChange = handlers.onSelectChange(updateLegalName, dispatch);
  const onChange = handlers.onInputChange(updateLegalName, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
  const onBlurValidate = handlers.onBlurValidate(dispatch);
  const onFocusClearValidation = handlers.onFocusClearValidation(dispatch);
  const onSubmitShowErrors = handlers.onSubmitShowErrors(dispatch);

  return {
    onChange,
    onSubmit,
    onBlurValidate,
    onFocusClearValidation,
    onSubmitShowErrors,
    onSelectChange
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
