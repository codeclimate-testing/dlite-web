'use strict';

import React from 'react';

import { updateDateOfBirth }     from '../../actions/index';
import VoterIntro                from '../../presentations/voter/introduction.jsx';
import connectForm               from '../../helpers/connect-form';

const ConnectedForm = (props) => {

  return (
    <div>
      <VoterIntro
        dateOfBirth = { props.dateOfBirth }
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);
