'use strict';

import React                 from 'react';
import { connect }           from 'react-redux';

import { updateDateOfBirth } from '../../actions/index';
import VoterIntro            from '../../presentations/voter-registration/introduction/introduction.jsx';
import PreRegVoterIntro      from '../../presentations/voter-registration/introduction/introduction-prereg.jsx';
import handlers              from '../../helpers/handlers';
import { isPreregistering }  from '../../helpers/calculate-age';
import {
  pageTitle,
  sectionName
} from '../../helpers/registration-header-presenter';


const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/voting-registration/citizenship', props);
  let onBack            = handlers.navigateOnBack(props);
  const formPageTitle   = pageTitle(props.dateOfBirth);
  const formSectionName = sectionName(props.dateOfBirth);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterIntro : VoterIntro;

  return (
    <Presentation
      {...props}
      pageTitle={formPageTitle}
      sectionName={formSectionName}
      onSubmit={onSubmit}
      onBack={onBack}
      />
  );
};

const mapStateToProps = (state) => {
  return {
    dateOfBirth:  state.application.dateOfBirth
  };
};

const mapDispatchToProps = (dispatch) => {
  const onSubmit        = handlers.onFormSubmit;

  return {
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
