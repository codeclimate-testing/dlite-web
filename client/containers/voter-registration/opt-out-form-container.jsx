'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import { updateOptOut }       from '../../actions/index';
import Presentation           from '../../presentations/voter-registration/opt-out-page.jsx';
import handlers               from '../../helpers/handlers';
import { OptOutValidator }    from '../../helpers/validations';

const Page = (props) => {
  let validations       = new OptOutValidator(props.optOut, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('votingOptOut', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit      = {onSubmit}
      onBack        = {onBack}
      selectedValue = {props.optOut}
      validations   = {validations}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    optOut        : state.application.voting.optOut,
    dateOfBirth   : state.application.basics.dateOfBirth,
    focused       : state.ui.focus,
    validations   : state.ui.validations,
    flow          : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateOptOut, Page);
