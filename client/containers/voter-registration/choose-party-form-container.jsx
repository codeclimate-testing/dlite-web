'use strict';

import React                          from 'react';
import connectForm                    from '../../helpers/connect-form';
import { updatePoliticalPartyChoose } from '../../actions/index';
import Presentation                   from '../../presentations/voter-registration/choose-party-page.jsx';
import handlers                       from '../../helpers/handlers';
import { checkPreReg }                from '../../helpers/data/youth';
import { ChoosePartyValidator }       from '../../helpers/validations';

const Page = (props) => {
  let validations         = new ChoosePartyValidator(props.politicalPartyChoose, props.validations);
  let onSubmit            = handlers.navigateOrShowErrors('choosePoliticalParty', props, validations);
  let onBack              = handlers.navigateOnBack(props, validations);

  let focus             =   function(e) {
    props.onFocusClearValidation(e);
    return props.onFocus(e);
  };

  let prereg = checkPreReg(props.dateOfBirth);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
      prereg            = { prereg }
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

