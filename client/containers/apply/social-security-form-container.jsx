'use strict';

import React from 'react';

import { updateSocialSecurity }   from "../../actions/index";
import Form                       from "../../presentations/apply/social-security-form.jsx";
import connectForm                from '../../helpers/connect-form';
import navigateOnSubmit           from '../../helpers/navigate-on-submit';
import navigateOnBack             from '../../helpers/navigate-on-back';
import * as dataPresent           from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          = navigateOnSubmit('/my-history/license-history', props);
  let onBack            = navigateOnBack('/my-basics/traits-height-weight', props);
  let continueDisabled  = !(dataPresent.socialSecurity(props.socialSecurity));
  let pageTitle         = "DMV: License application - My basics";

  return (
    <Form
      pageTitle           = { pageTitle }
      onSubmit            = { onSubmit }
      onBack              = { onBack }
      onChange            = { props.onChange }
      socialSecurity      = { props.socialSecurity }
      continueDisabled    = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    socialSecurity: state.application.socialSecurity
  };
}

export default connectForm(mapStateToProps, updateSocialSecurity, ConnectedForm);
