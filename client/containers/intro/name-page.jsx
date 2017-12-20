'use strict';

import React from 'react';
import { connect } from 'react-redux';

import handlers             from '../../helpers/handlers';
import * as dataPresent     from '../../helpers/data-present';

import Presentation         from '../../presentations/intro/name-page.jsx';
import { updateLegalName }  from '../../actions/index';

const Page = (props) => {
  let continueDisabled  =   !dataPresent.legalName(props.legalName);
  let onSubmit          =   handlers.navigateOnSubmit('/my-basics/date-of-birth', props);
  let onBack            =   handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    legalName: state.application.legalName,
    section: state.ui.section
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange   = handlers.onInputChange(updateLegalName, dispatch);
  const onSubmit   = handlers.onFormSubmit;

  return {
    onChange,
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
