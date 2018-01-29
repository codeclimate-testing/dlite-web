'use strict';

import React                  from 'react';
import { connect }            from 'react-redux';
import handlers               from '../../helpers/handlers';
import { updateLanguage }     from "../../actions/index";
import Presentation           from "../../presentations/get-started/choose-language-page.jsx";

const Page = (props) => {
  let onBack            =   handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onBack            = { onBack }
      selectedValue     = { props.appLanguage }
      name              = 'appLanguage'
    />
  );
};

function mapStateToProps(state) {
  return {
    appLanguage:  state.application.language.appLanguage,
    focused:      state.ui.focus,
    validations:  state.ui.validations
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange                = handlers.onInputChange(updateLanguage, dispatch);
  const onFormSubmit            = handlers.onFormSubmit(dispatch);
  const onBlurValidate          = handlers.onBlurValidate(dispatch);
  const onFocusClearValidation  = handlers.onFocusClearValidation(dispatch);
  const onSubmitShowErrors      = handlers.onSubmitShowErrors(dispatch);

  return {
    onChange,
    onFormSubmit,
    onBlurValidate,
    onFocusClearValidation,
    onSubmitShowErrors,
    dispatch
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch, onFormSubmit }  = dispatchProps;
  const { appLanguage }             = stateProps;

  return Object.assign({}, ownProps, {
    onSubmit: (e) => {
      e.preventDefault();

      if (!appLanguage) {
        dispatch(updateLanguage('appLanguage', 'en'));
      }
      return ownProps.history.push('/apply/choose');
    }
  });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Page);
