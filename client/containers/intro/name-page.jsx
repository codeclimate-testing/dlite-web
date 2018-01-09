'use strict';

import React from 'react';
import { connect }            from 'react-redux';

import handlers               from '../../helpers/handlers';
import { NamePageValidator }  from '../../helpers/validations';

import { updateLegalName }    from '../../actions/index';
import Presentation           from '../../presentations/intro/name-page.jsx';

const Page = (props) => {
  let validations = new NamePageValidator(props.legalName, props.validations);
  let onBack = handlers.navigateOnBack(props);
  let onSubmit = handlers.navigateOrShowErrors('trueName', props, validations);

  return (
    <Presentation
      {...props}
      onSubmit={ onSubmit }
      onBack={ onBack }
      validations={ validations }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    legalName: state.application.legalName,
    validations: state.ui.validations
  };
};

const mapDispatchToProps = (dispatch) => {
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
    onSubmitShowErrors
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
