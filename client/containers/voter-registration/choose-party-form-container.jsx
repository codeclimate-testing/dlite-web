'use strict';

import React                           from 'react';
import connectForm            from '../../helpers/connect-form';

import handlers                        from '../../helpers/handlers';
import { updatePoliticalPartyChoose }  from '../../actions/index';
import PoliticalPartyChoosePage        from '../../presentations/voter-registration/voter-choose-party/voter-choose-party-page.jsx';
import PreRegPoliticalPartyChoosePage  from '../../presentations/voter-registration/voter-choose-party/voter-choose-party-prereg-page.jsx';
import { isPreregistering }            from '../../helpers/calculate-age';

const Page = (props) => {
  let continueDisabled    = false;
  let onSubmit            = handlers.navigateOnSubmit('/voting-registration/language', props);
  let onBack              = handlers.navigateOnBack(props);

  const Presentation = isPreregistering(props.dateOfBirth) ? PreRegPoliticalPartyChoosePage : PoliticalPartyChoosePage;

    return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    politicalPartyChoose: state.application.politicalPartyChoose,
    optOut: state.application.optOut,
    dateOfBirth:  state.application.dateOfBirth,
    focused:  state.ui.focus
  };
};

export default connectForm(mapStateToProps, updatePoliticalPartyChoose, Page);

