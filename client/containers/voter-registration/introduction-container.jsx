'use strict';

import React                from 'react';

import VoterIntro           from '../../presentations/voter-registration/introduction.jsx';
import PreRegVoterIntro     from '../../presentations/voter-registration/introduction-prereg.jsx';
import connectForm          from '../../helpers/connect-form';
import { isPreregistering } from '../../helpers/calculate-age';

const Page = (props) => {
  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterIntro : VoterIntro;

  return (
    <Presentation
      {...props}
    />
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, null, Page);
