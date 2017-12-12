'use strict';

import React from 'react';

import { updateDateOfBirth }        from '../../actions/index';
import VoterIntro                   from '../../presentations/voter/introduction.jsx';
import PreRegVoterIntro             from '../../presentations/voter/introduction-prereg.jsx';
import connectForm                  from '../../helpers/connect-form';
import { getCurrentAge }            from '../../helpers/calculate-age';

const ConnectedForm = (props) => {

  let content = [];

  if ((props.dateOfBirth.age >= 16 ) && (props.dateOfBirth.age <= 18)) {
    content.push(
      <PreRegVoterIntro key='Pre-registration Voter introduction'/>
    );
  }
  else {
    content.push(
      <VoterIntro key='Voter introduction'/>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);
