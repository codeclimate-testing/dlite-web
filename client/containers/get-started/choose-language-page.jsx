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
    focused:      state.ui.focus,
    appLanguage:  state.application.language.appLanguage
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch }        = dispatchProps;
  const { appLanguage }     = stateProps;

  return Object.assign({}, ownProps, {
    onFocus               : handlers.onFocus(dispatch),
    onFocusClearValidation: handlers.onFocusClearValidation(dispatch),
    onBlurValidate        : handlers.onBlurValidate(dispatch),
    onBlur                : handlers.onBlur(dispatch),
    onChange              : handlers.onInputChange(updateLanguage, dispatch),
    appLanguage           : stateProps.appLanguage,
    focused               : stateProps.focused,
    onSubmit: (e) => {
      e.preventDefault();

      if (!appLanguage) {
        dispatch(updateLanguage('appLanguage', 'en'));
      }
      return ownProps.history.push('/apply/choose');
    }
  });
};

export default connect(mapStateToProps, null, mergeProps)(Page);
