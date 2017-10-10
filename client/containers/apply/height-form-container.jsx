'use strict';

import React from 'react';

import { updateHeight }  from "../../actions/index";
import FormPresentation  from "../../presentations/apply/height-form.jsx";
import connectForm       from '../../helpers/connect-form';
import navigateOnSubmit  from '../../helpers/navigate-on-submit';
import * as dataPresent  from '../../helpers/data-present';

const Form = (props) => {
  let continueDisabled  = !dataPresent.height(props.height);
  let onSubmit          = navigateOnSubmit('/about-me/weight', props);
  let pageTitle          = 'About me: Height';

  return (
    <FormPresentation
      pageTitle           = { pageTitle }
      onSubmit            = { onSubmit }
      onChange            = { props.onChange }
      height              = { props.height }
      continueDisabled    = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    height: state.application.height
  };
}

export default connectForm(mapStateToProps, updateHeight, Form);
