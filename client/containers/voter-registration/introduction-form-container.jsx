'use strict';

import React                 from 'react';
import connectForm            from '../../helpers/connect-form';

import VoterIntro            from '../../presentations/voter-registration/introduction/introduction.jsx';
import PreRegVoterIntro      from '../../presentations/voter-registration/introduction/introduction-prereg.jsx';
import handlers              from '../../helpers/handlers';
import { isPreregistering }  from '../../helpers/calculate-age';

const Page = (props) => {
  let validations       = {};
  let onSubmit          = handlers.navigateOrShowErrors('voterIntro', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterIntro : VoterIntro;

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