'use strict';

import React from 'react';

import { updateDateOfBirth } from '../../actions/index';
import VoterRegComplete from '../../presentations/voter/voter-confirmation.jsx';
import PreRegVoterRegComplete from '../../presentations/voter/voter-confirmation-prereg.jsx';
import connectForm from '../../helpers/connect-form';
import { isPreregistering } from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';

const ConnectedForm = (props) => {
  const formPageTitle = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterRegComplete : VoterRegComplete;

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
