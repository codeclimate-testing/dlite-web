'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';
import Presentation           from '../../presentations/voter-registration/introduction.jsx';
import handlers               from '../../helpers/handlers';

const Page = (props) => {
  let validations       = {
    isValid: () => true
  };
  let onSubmit          = handlers.navigateOrShowErrors('voterIntro', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit = { onSubmit }
      onBack = { onBack }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    dateOfBirth:  state.application.dateOfBirth,
    focused:      state.ui.focus
  };
};

export default connectForm(mapStateToProps, null, Page);