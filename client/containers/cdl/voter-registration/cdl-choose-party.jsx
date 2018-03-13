'use strict';

import React                             from 'react';
import connectForm                       from '../../../helpers/connect-form';
import { updateCDLPoliticalPartyChoose } from '../../../actions/index';
import Presentation                      from '../../../presentations/voter-registration/choose-party-page.jsx';
import handlers                          from '../../../helpers/handlers';
import { ChoosePartyValidator }          from '../../../helpers/validations';

const Page = (props) => {
  let locale              = props.locale;
  let validations         = new ChoosePartyValidator(Object.assign(props.politicalPartyChoose, {locale}), props.validations);
  let onSubmit            = handlers.navigateOrShowErrors('cdlChoosePoliticalParty', props, validations);
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
    politicalPartyChoose: state.cdl.voting.politicalPartyChoose,
    optOut              : state.cdl.voting.optOut,
    dateOfBirth         : state.cdl.basics.dateOfBirth,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    locale              : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCDLPoliticalPartyChoose, Page);
