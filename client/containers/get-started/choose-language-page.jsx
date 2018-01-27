'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';

import { updateLanguage }     from "../../actions/index";
import Presentation           from "../../presentations/get-started/choose-language-page.jsx";

const Page = (props) => {
  let onSubmit          =   handlers.navigateOrShowErrors('chooseLanguage', props, {isValid: () => true });
  let onBack            =   handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
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

export default connectForm(mapStateToProps, updateLanguage, Page);