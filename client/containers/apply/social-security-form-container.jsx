'use strict';

import React from 'react';

import { updateSocialSecurity }   from "../../actions/index";
import SocialSecurityOption       from "../../presentations/apply/social-security-option-form.jsx";
import SocialSecurityEnter        from "../../presentations/apply/social-security-enter-form.jsx";
import SocialSecurityNoInfo       from "../../presentations/apply/social-security-no-info.jsx";
import ContinueButton             from "../../presentations/continue-button.jsx";
import BackButton                 from "../../presentations/back-button.jsx";
import connectForm                from '../../helpers/connect-form';
import navigateOnSubmit           from '../../helpers/navigate-on-submit';
import navigateOnBack             from '../../helpers/navigate-on-back';
import * as dataPresent           from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let onSubmit          = navigateOnSubmit('/my-history/license-and-id', props);
  let onBack            = navigateOnBack('/my-basics/traits-height-weight', props);
  let continueDisabled  = !(dataPresent.socialSecurity(props.socialSecurity));
  let pageTitle         = "DMV: License application - My basics";

  let content = [];

  content.push(
    <SocialSecurityOption
      pageTitle     = { pageTitle }
      onChange      = { props.onChange }
      selectedValue = { props.socialSecurity.hasSocialSecurity }
      key           = 'social-security-option'
    />
  );

  if(props.socialSecurity.hasSocialSecurity === 'Yes') {
    content.push(<SocialSecurityEnter
      socialSecurity  = {props.socialSecurity}
      onChange        = { props.onChange }
      key             = 'social-security-enter'/>
    );
  }

  if(props.socialSecurity.hasSocialSecurity === 'No') {
    continueDisabled = false;
    content.push(<SocialSecurityNoInfo key = 'social-security-no-info' />);
  }


  content.push(<ContinueButton disabled={continueDisabled} key = 'continue-button' />);
  content.push(<BackButton onBack={onBack} key = 'back-button' />);

  return (
    <form onSubmit={onSubmit}>
      { content }
    </form>
  );
};

function mapStateToProps(state) {
  return {
    socialSecurity: state.application.socialSecurity
  };
}

export default connectForm(mapStateToProps, updateSocialSecurity, ConnectedForm);
