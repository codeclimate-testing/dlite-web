'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers               from '../../helpers/handlers';

import { updateAppLanguage }  from "../../actions/index";
import Presentation           from "../../presentations/get-started/choose-language-page.jsx";


const Page = (props) => {
  console.log(props.appLanguage)
  let onSubmit          =   handlers.navigateOrShowErrors('chooseLanguage', props, {isValid: () => true });
  let onBack            =   handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.appLanguage }
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

export default connectForm(mapStateToProps, updateAppLanguage, Page);