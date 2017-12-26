'use strict';

import React                        from 'react';
import { connect }                  from 'react-redux';

import handlers                     from '../../helpers/handlers';
import * as dataPresent             from '../../helpers/data-present';

import { updatePhysicalTraits }     from '../../actions/index';
import Presentation                 from '../../presentations/apply/physical-traits-page.jsx';

const Page = (props) => {
  let continueDisabled  = !(dataPresent.physicalTraits(props.physicalTraits))
  let onSubmit          = handlers.navigateOnSubmit('/my-basics/traits-height-weight', props);
  let onBack            = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
}

function mapStateToProps(state) {
  return {
    physicalTraits: state.application.physicalTraits,
    focused:        state.ui.focus
  };
};

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updatePhysicalTraits, dispatch);
  const onSubmit = handlers.onFormSubmit(dispatch);
  const onBlur   = handlers.onBlur(dispatch);
  const onFocus  = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onChange,
    onBlur,
    onFocus
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
