'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import Presentation             from '../../presentations/voter-registration/confirmation.jsx';
import handlers                 from '../../helpers/handlers';

const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/summary', props);
  let onBack            = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit={onSubmit}
      onBack={onBack}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    dateOfBirth : state.application.dateOfBirth,
    focused     : state.ui.focus
  };
};

export default connectForm(mapStateToProps, null, Page);
