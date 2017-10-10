'use strict';

import React from 'react';

import { updateSocialSecurity }   from "../../actions/index";
import Form                       from "../../presentations/apply/social-security-form.jsx";
import connectForm                from '../../helpers/connect-form';
import navigateOnSubmit           from '../../helpers/navigate-on-submit';
import * as dataPresent           from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          = navigateOnSubmit('/about-me/voter/am-citizen', props);
  let continueDisabled  = !(dataPresent.socialSecurity(props.socialSecurity));
  let pageTitle         = 'About me: Social security';
  return (
    <Form
      pageTitle           = { pageTitle }
      onSubmit            = { onSubmit }
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
