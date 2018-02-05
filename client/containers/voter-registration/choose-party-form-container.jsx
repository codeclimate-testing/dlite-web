'use strict';

import React                          from 'react';
import connectForm                    from '../../helpers/connect-form';
import { updatePoliticalPartyChoose } from '../../actions/index';
import Presentation                   from '../../presentations/voter-registration/choose-party-page.jsx';
import handlers                       from '../../helpers/handlers';
import { ChoosePartyValidator }       from '../../helpers/validations';

const Page = (props) => {
  let validations         = new ChoosePartyValidator(props.politicalPartyChoose, props.validations);
  let onSubmit            = handlers.navigateOrShowErrors('choosePoliticalParty', props, validations);
  let onBack              = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    politicalPartyChoose: state.application.politicalPartyChoose,
    optOut              : state.application.optOut,
    dateOfBirth         : state.application.dateOfBirth,
    focused             : state.ui.focus,
    validations         : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updatePoliticalPartyChoose, Page);

