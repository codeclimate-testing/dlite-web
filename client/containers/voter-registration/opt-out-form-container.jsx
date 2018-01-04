'use strict';

import React from 'react';
import { connect } from "react-redux";

import { updateOptOut }       from '../../actions/index';

import OptOutForm              from '../../presentations/voter-registration/opt-out/opt-out-form.jsx';
import PreregOptOutForm        from '../../presentations/voter-registration/opt-out/opt-out-prereg-form.jsx';

import handlers                from '../../helpers/handlers';
import * as dataPresent        from '../../helpers/data-present';
import { hasValue }            from '../../helpers/data/validations';
import { eligibleForOptOut, eligibleForOptOutExist
} from '../../helpers/data/voting';
import { isPreregistering 
} from '../../helpers/calculate-age';

const Page = (props) => {

  let address = '/summary';
  if (eligibleForOptOut(props)) {
    address = '/voting-registration/preferences';
  };
  if (eligibleForOptOutExist(props)) {
    address = '/voting-registration/preferences-updated';
  };
  
  let onSubmit           = handlers.navigateOnSubmit(address, props);
  let onBack             = handlers.navigateOnBack(props);
  let continueDisabled   = !(dataPresent.value(props.optOut));

  const Presentation = isPreregistering(props.dateOfBirth) ? PreregOptOutForm : OptOutForm;

  return (
    <Presentation
      {...props}
      onSubmit={onSubmit}
      onBack={onBack}
      onChange={props.onChange}
      selectedValue={props.optOut}
      continueDisabled={continueDisabled}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    optOut: state.application.optOut,
    dateOfBirth: state.application.dateOfBirth,
    focused: state.ui.focus
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange = handlers.onInputChange(updateOptOut, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);

  return {
    onChange,
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
