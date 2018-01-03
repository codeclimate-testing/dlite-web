'use strict';

import React                        from 'react';
import { connect }                  from 'react-redux';

import { updateDateOfBirth }        from '../../actions/index';
import VoterPreferencesIntro        from '../../presentations/voter-registration//voter-preferences/voter-preferences-intro-form.jsx';
import PreRegVoterPreferencesIntro  from '../../presentations/voter-registration//voter-preferences/voter-preferences-info-prereg-form.jsx';
import handlers                     from '../../helpers/handlers';
import { isPreregistering 
} from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';


const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/voting-registration/choose-party', props);
  let onBack            = handlers.navigateOnBack(props);
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterPreferencesIntro : VoterPreferencesIntro;
  return (
    <Presentation
      {...props}
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      optOut={props.optOut}
      onSubmit={onSubmit}
      onBack={onBack}
      />
  );
};

const mapStateToProps = (state) => {
  return {
    optOut: state.application.optOut,
    dateOfBirth:  state.application.dateOfBirth
  };
};

const mapDispatchToProps = (dispatch) => {
  const onSubmit = handlers.onFormSubmit;

  return {
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
