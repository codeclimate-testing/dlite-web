'use strict';

import React                         from 'react';
import connectForm                   from '../../../helpers/connect-form';
import handlers                      from '../../../helpers/handlers';
import { SSNValidator }              from '../../../helpers/validations';
import { updateCdlSocialSecurity }   from '../../../actions/index.js';
import Presentation                  from '../../../presentations/cdl/ssn/social-security-page.jsx';

const Page = (props) => {
  let locale            =   props.locale;
  let validations       =   new SSNValidator(Object.assign(props.socialSecurity, {locale}), props.validations);
  let onSubmit          =   handlers.navigateOrShowErrors('cdlSocialSecurity', props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);

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
    socialSecurity: state.cdl.basics.socialSecurity,
    cardAction    : state.cdl.cardAction,
    focused       : state.ui.focus,
    validations   : state.ui.validations,
    locale        : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCdlSocialSecurity, Page);