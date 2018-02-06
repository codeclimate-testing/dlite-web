'use strict';

import React                      from 'react';
import { connect }                from 'react-redux';
import handlers                   from '../../helpers/handlers';
import Presentation               from "../../presentations/get-started/choose-language-page.jsx";
import { updateLanguage }         from '../../actions/index';
import {
  mergePropsGenerator,
  onSubmitDispatches
}    from '../../helpers/handlers/merge-props';

const Page = (props) => {
  let onBack            =   handlers.navigateOnBack(props);
  return (
    <Presentation
      {...props}
      onBack            = { onBack }
      selectedValue     = { props.application.appLanguage }
      name              = 'appLanguage'
      appLanguage       = { props.application.appLanguage }
    />
  );
};

function mapStateToProps(state) {
  return state;
};

let mergeProps = mergePropsGenerator(updateLanguage, onSubmitDispatches.defaultLanguage);
export default connect(mapStateToProps, null, mergeProps)(Page);
