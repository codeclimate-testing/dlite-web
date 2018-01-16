'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

import handlers                 from '../../helpers/handlers';
import { SSNValidator }         from '../../helpers/validations';

import { updateSocialSecurity } from "../../actions/index";
import Presentation             from '../../presentations/myBasics/social-security-page.jsx';

import { getDL }                from '../../helpers/data/card-type';

const Page = (props) => {
  let validations       = new SSNValidator(props.socialSecurity, props.validations, 'socialSecurityAvailabilityMissing');
  let onSubmit          =   handlers.navigateOrShowErrors('socialSecurity', props, validations);
  let onBack            =   handlers.navigateOnBack(props);

  return (
    <Presentation 
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    socialSecurity: state.application.socialSecurity,
    cardType:       state.application.cardType,
    focused:        state.ui.focus,
    validations:    state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateSocialSecurity, Page);