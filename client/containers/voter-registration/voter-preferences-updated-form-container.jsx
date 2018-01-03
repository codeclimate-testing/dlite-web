'use strict';

import React                                from 'react';
import { connect }                          from 'react-redux';

import { updateDateOfBirth }                from '../../actions/index';
import VoterPreferencesIntroUpdated         from '../../presentations/voter-registration/voter-preferences-updated/voter-preferences-intro-updated-form.jsx';
import PreRegVoterPreferencesIntroUpdated   from '../../presentations/voter-registration/voter-preferences-updated/voter-preferences-info-prereg-updated-form.jsx';
import handlers                             from '../../helpers/handlers';
import { isPreregistering 
} from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';


const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/voting-registration/choose-party', props);
  let onBack            = handlers.navigateOnBack(props);
  const formPageTitle   = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterPreferencesIntroUpdated : VoterPreferencesIntroUpdated;
  return (
    <Presentation
      {...props}
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onSubmit={onSubmit}
      onBack={onBack}
      optOut={props.optOut} />
  );
};

const mapStateToProps = (state) => {
  return {
    dateOfBirth: state.application.dateOfBirth,
    optOut: state.application.optOut
  };
};

const mapDispatchToProps = (dispatch) => {
  const onSubmit = handlers.onFormSubmit;

  return {
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
