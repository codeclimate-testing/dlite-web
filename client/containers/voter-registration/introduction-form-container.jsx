'use strict';

import React                 from 'react';
import { connect }           from 'react-redux';

import VoterIntro            from '../../presentations/voter-registration/introduction/introduction.jsx';
import PreRegVoterIntro      from '../../presentations/voter-registration/introduction/introduction-prereg.jsx';
import handlers              from '../../helpers/handlers';
import { isPreregistering }  from '../../helpers/calculate-age';

const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/voting-registration/citizenship', props);
  let onBack            = handlers.navigateOnBack(props);

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

const mapDispatchToProps = (dispatch) => {
  const onSubmit = handlers.onFormSubmit(dispatch);
  return {
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
