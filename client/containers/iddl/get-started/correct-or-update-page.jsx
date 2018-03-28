'use strict';

import React                  from 'react';
import connectForm            from '../../../helpers/connect-form';
import handlers               from '../../../helpers/handlers';
import { updateCardChanges }  from '../../../actions/index';
import Presentation           from '../../../presentations/get-started/correct-or-update-page.jsx';
import { ChangeValidator }    from '../../../helpers/validations';
import { getCorrectApp }      from '../../../helpers/data/card-type';


const Page = (props) => {
  let validations       = new ChangeValidator(props.cardChanges, props.validations, 'applicationActionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('updateAndCorrect', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      cardChanges       = { props.cardChanges }
      validations       = { validations }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardChanges         : getCorrectApp(state.application).cardChanges,
    cardType            : state.application.cardType,
    licenseAndIdHistory : state.application.history.licenseAndIdHistory,
    cardAction          : state.application.cardAction,
    dateOfBirth         : state.application.basics.dateOfBirth,
    seniorID            : state.application.IDApp.seniorID,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    flow                : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCardChanges, Page);
