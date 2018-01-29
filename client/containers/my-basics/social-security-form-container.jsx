'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import handlers                 from '../../helpers/handlers';
import { SSNValidator }         from '../../helpers/validations';
import { updateSocialSecurity } from "../../actions/index";
import Presentation             from '../../presentations/my-basics/social-security-page.jsx';
import { getDL }                from '../../helpers/data/card-type';

const Page = (props) => {
  let validations       =   new SSNValidator(props.socialSecurity, props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('socialSecurity', props, validations);
  let onBack            =   handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onBack          = { onBack }
      onSubmit        = { onSubmit }
      validations     = { validations }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    socialSecurity: state.application.socialSecurity,
    cardType:       state.application.cardType,
    focused:        state.ui.focus,
    validations:    state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateSocialSecurity, Page);