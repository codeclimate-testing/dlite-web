'use strict';

import React                        from 'react';
import { mergePropsGenerator }      from '../../helpers/merge-props';
import Presentation                 from '../../presentations/voter-registration/introduction.jsx';
import handlers                     from '../../helpers/handlers';
import { updateIsPreRegistering }   from '../../actions';

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

export default mergePropsGenerator(mapStateToProps, updateIsPreRegistering, 'isPreRegistering', Page);