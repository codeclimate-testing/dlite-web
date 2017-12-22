'use strict';

import React                          from 'react';
import { connect }                    from 'react-redux';

import handlers                       from '../../helpers/handlers';
import * as dataPresent               from '../../helpers/data-present';

import { updateLicenseAndIdHistory }  from '../../actions/index';
import Presentation                   from '../../presentations/apply/card-history-page.jsx';

const Page = (props) => {
  let continueDisabled    = !(dataPresent.licenseAndIdHistory(props.licenseAndIdHistory));
  let onSubmit            = handlers.navigateOnSubmit('/my-history/names/', props);
  let onBack              = handlers.navigateOnBack(props);

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
    licenseAndIdHistory:  state.application.licenseAndIdHistory,
    cardType:             state.application.cardType,
    focused:              state.ui.focus
  };
};

function mapDispatchToProps(dispatch) {
  const onChange = handlers.onInputChange(updateLicenseAndIdHistory, dispatch);
  const onSubmit = handlers.onFormSubmit;
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
