'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';

import VoterRegComplete         from '../../presentations/voter-registration/voter-confirmation/voter-confirmation.jsx';
import PreRegVoterRegComplete   from '../../presentations/voter-registration/voter-confirmation/voter-confirmation-prereg.jsx';
import handlers                 from '../../helpers/handlers';
import { isPreregistering }     from '../../helpers/calculate-age';

const Page = (props) => {
  let onSubmit          = handlers.navigateOnSubmit('/summary', props);
  let onBack            = handlers.navigateOnBack(props);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegVoterRegComplete : VoterRegComplete;

  return (
    <Presentation
      {...props}
      onSubmit={onSubmit}
      onBack={onBack}
      />
  );
};

const mapStateToProps = (state) => {
  return {
    dateOfBirth : state.application.dateOfBirth,
    focused     : state.ui.focus
  };
};

export default connectForm(mapStateToProps, null, Page);
