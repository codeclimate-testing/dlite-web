'use strict';

import React                    from 'react';
import connectForm              from '../../../helpers/connect-form';
import Presentation             from '../../../presentations/voter-registration/voter-preferences-page.jsx';
import { updateDateOfBirth }    from '../../../actions/index';
import handlers                 from '../../../helpers/handlers';

const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/voting-registration/choose-party', props);
  let onBack            = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit= { onSubmit }
      onBack  = { onBack }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    optOut:       state.application.voting.optOut,
    dateOfBirth:  state.application.basics.dateOfBirth,
    focused:      state.ui.focus,
    flow:         state.ui.flow
  };
};

export default connectForm(mapStateToProps, null, Page);