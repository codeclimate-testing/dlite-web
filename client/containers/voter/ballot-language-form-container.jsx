'use strict';

import React from 'react';

import { updateBallotLanguage }  from '../../actions/index';
import BallotLanguageForm        from '../../presentations/voter/ballot-language-form.jsx';
import BallotLanguageFormPreReg  from '../../presentations/voter/ballot-language-prereg-form.jsx';
import connectForm               from '../../helpers/connect-form';
import navigateOnSubmit          from '../../helpers/navigate-on-submit';
import navigateOnBack            from '../../helpers/navigate-on-back';
import { isPreregistering }      from '../../helpers/calculate-age';

const ConnectedForm = (props) => {
  const continueDisabled = false;
  const onSubmit = navigateOnSubmit('/voting-registration/vote-by-mail', props);
  const onBack = navigateOnBack(props);
  let content = [];

  if (isPreregistering(props.dateOfBirth)) {
    content.push(
      <BallotLanguageFormPreReg
        key='Pre-registration Ballot language'
        onSubmit={onSubmit}
        onBack={onBack}
        onChange={props.onChange}
        selectedValue={props.ballotLanguage}
        continueDisabled={continueDisabled}
      />
    );
  } else {
    content.push(
      <BallotLanguageForm
        key='Ballot language'
        onSubmit={onSubmit}
        onBack={onBack}
        onChange={props.onChange}
        selectedValue={props.ballotLanguage}
        continueDisabled={continueDisabled}
        />
    );
  }

  return (
    <div> {content} </div>
  );
};

function mapStateToProps(state) {
  return {
    ballotLanguage: state.application.ballotLanguage,
    dateOfBirth:  state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateBallotLanguage, ConnectedForm);
