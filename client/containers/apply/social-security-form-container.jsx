'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';

import handlers                 from '../../helpers/handlers';
import * as dataPresent         from '../../helpers/data-present';

import { updateSocialSecurity } from "../../actions/index";
import Presentation             from '../../presentations/apply/social-security-page.jsx';

const Page = (props) => {
  let nextAddress       = props.cardType.DL ? '/my-history/medical' : '/my-history/license-and-id';
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
    cardType: state.application.cardType
  };
};

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateSocialSecurity, dispatch);
  const onSubmit = handlers.onFormSubmit;
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
