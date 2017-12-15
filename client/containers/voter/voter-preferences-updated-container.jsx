'use strict';

import React from 'react';

import { updateDateOfBirth } from '../../actions/index';
import VoterPreferencesIntroUpdated from '../../presentations/voter/voter-preferences-intro-updated-form.jsx';
import PreRegVoterPreferencesIntroUpdated from '../../presentations/voter/voter-preferences-info-prereg-updated-form.jsx';
import connectForm from '../../helpers/connect-form';
import { isPreregistering } from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';

const ConnectedForm = (props) => {
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterPreferencesIntroUpdated : VoterPreferencesIntroUpdated;
  return (
    <Presentation
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      optOut={props.optOut} />
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth: state.application.dateOfBirth,
    optOut: state.application.optOut
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);
