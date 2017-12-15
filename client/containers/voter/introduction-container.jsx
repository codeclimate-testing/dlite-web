'use strict';

import React from 'react';

import { updateDateOfBirth } from '../../actions/index';
import VoterIntro from '../../presentations/voter/introduction.jsx';
import PreRegVoterIntro from '../../presentations/voter/introduction-prereg.jsx';
import connectForm from '../../helpers/connect-form';
import { isPreregistering } from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';

const ConnectedForm = (props) => {
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterIntro : VoterIntro;

  return (
    <Presentation
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      />
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);
