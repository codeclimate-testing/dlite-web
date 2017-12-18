'use strict';

import React from 'react';

import { updateDateOfBirth } from '../../actions/index';
import VoterPreferencesIntro from '../../presentations/voter-registration/voter-preferences-intro-form.jsx';
import PreRegVoterPreferencesIntro from '../../presentations/voter-registration/voter-preferences-info-prereg-form.jsx';
import connectForm from '../../helpers/connect-form';
import { isPreregistering } from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';

const ConnectedForm = (props) => {
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterPreferencesIntro : VoterPreferencesIntro;
  return (
    <Presentation
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      optOut={props.optOut} 
      />
  );
};

function mapStateToProps(state) {
  return {
    optOut: state.application.optOut,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);
