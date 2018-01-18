'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';

import { updateOptOut }       from '../../actions/index';
import Presentation           from '../../presentations/voter-registration/opt-out-page.jsx';
import handlers               from '../../helpers/handlers';
import { checkPreReg }        from '../../helpers/data/youth';
import { OptOutValidator }    from '../../helpers/validations';

const Page = (props) => {
  let validations       = new OptOutValidator(props.optOut, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('votingOptOut', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  let focus             =   function(e) {
    props.onFocusClearValidation(e);
    return props.onFocus(e);
  };

  let prereg = checkPreReg(props.dateOfBirth);

  return (
    <Presentation
      {...props}
      onSubmit      = {onSubmit}
      onBack        = {onBack}
      onChange      = {props.onChange}
      selectedValue = {props.optOut}
      validations   = {validations}
      prereg        = {prereg}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    optOut        : state.application.optOut,
    dateOfBirth   : state.application.dateOfBirth,
    focused       : state.ui.focus,
    validations   : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateOptOut, Page);
