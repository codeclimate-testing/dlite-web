'use strict';

import React                      from 'react';
import { connect }                from 'react-redux';
import handlers                   from '../../helpers/handlers';
import mergeProps                 from '../../helpers/handlers/choose-language';
import Presentation               from "../../presentations/get-started/choose-language-page.jsx";

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

export default connect(mapStateToProps, null, mergeProps)(Page);
