'use strict';

import React                from 'react';
import { connect }          from 'react-redux';

import handlers             from '../../helpers/handlers';
import * as dataPresent     from '../../helpers/data-present';

import { updateTraitsHeightWeight }  from "../../actions/index";
import Presentation                  from "../../presentations/apply/traits-height-weight-page.jsx";


const Page = (props) => {
  let continueDisabled   = !dataPresent.traitsHeightWeight(props.traitsHeightWeight);
  let onSubmit           = handlers.navigateOnSubmit('/my-basics/social-security', props);
  let onBack             = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit            = { onSubmit }
      onBack              = { onBack }
      continueDisabled    = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    traitsHeightWeight: state.application.traitsHeightWeight,
    focused:            state.ui.focus
  };
};
function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateTraitsHeightWeight, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
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
