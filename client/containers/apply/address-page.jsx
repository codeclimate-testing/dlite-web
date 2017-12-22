'use strict';

import React                        from 'react';
import { connect }                  from 'react-redux';

import handlers                     from '../../helpers/handlers';
import { canContinue }              from '../../helpers/data/address.js';

import { 
  updateMailingAddress,
  updateHomeAddress
 }     from '../../actions/index';

import Presentation                 from '../../presentations/apply/address-page.jsx';

const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/my-basics/physical-traits', props);
  let onBack            = handlers.navigateOnBack(props);
  let continueDisabled  = !canContinue(props);

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
    mailingAddress: state.application.mailingAddress,
    homeAddress:    state.application.homeAddress,
    focused:        state.ui.focus
  };
}

function mapDispatchToProps(dispatch) {
  const onHomeChange    = handlers.onInputChange(updateHomeAddress, dispatch);
  const onMailingChange = handlers.onInputChange(updateMailingAddress, dispatch);
  const onSubmit        = handlers.onFormSubmit;
  const onBlur          = handlers.onBlur(dispatch);
  const onFocus         = handlers.onFocus(dispatch);

  return {
    onSubmit,
    onHomeChange,
    onMailingChange,
    onBlur,
    onFocus
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
