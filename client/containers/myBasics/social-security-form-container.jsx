'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

import handlers                 from '../../helpers/handlers';
import * as dataPresent         from '../../helpers/data-present';

import { updateSocialSecurity } from "../../actions/index";
import Presentation             from '../../presentations/myBasics/social-security-page.jsx';

import { getDL }                from '../../helpers/data/card-type';

const Page = (props) => {
  let nextAddress       = getDL(props) ? '/my-history/medical' : '/my-history/license-and-id';
  let onSubmit          = handlers.navigateOnSubmit(nextAddress, props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = !(dataPresent.socialSecurity(props.socialSecurity));

  return (
    <Presentation 
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    socialSecurity: state.application.socialSecurity,
    cardType:       state.application.cardType,
    focused:        state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateSocialSecurity, Page);