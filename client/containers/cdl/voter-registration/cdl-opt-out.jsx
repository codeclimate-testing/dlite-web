'use strict';

import React                  from 'react';
import connectForm            from '../../../helpers/connect-form';
import Presentation           from '../../../presentations/voter-registration/opt-out-page.jsx';
import handlers               from '../../../helpers/handlers';
import { updateCDLOptOut }    from '../../../actions/index';
import { OptOutValidator }    from '../../../helpers/validations';

const Page = (props) => {
  let locale            = props.locale;
  let validations       = new OptOutValidator(Object.assign(props.optOut, {locale}), props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlVotingOptOut', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit      = {onSubmit}
      onBack        = {onBack}
      validations   = {validations}
      selectedValue = {props.optOut}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    optOut        : state.cdl.voting.optOut,
    dateOfBirth   : state.cdl.basics.dateOfBirth,
    focused       : state.ui.focus,
    validations   : state.ui.validations,
    locale        : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCDLOptOut, Page);
