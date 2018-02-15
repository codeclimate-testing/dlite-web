'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';
import handlers               from '../../helpers/handlers';
import { updateCardChanges }  from '../../actions/index';
import Presentation           from '../../presentations/get-started/correct-or-update-page.jsx';
import { ChangeValidator }    from '../../helpers/validations';
import translations           from '../../i18n';
import { getCorrectApp }      from '../../helpers/data/card-type';


const Page = (props) => {
  let validations       = new ChangeValidator(props.cardChanges, props.validations, 'applicationActionMissing');
  let onSubmit          = handlers.navigateOrShowErrors(props.addressName, props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardChanges.correctOrUpdate }
      validations       = { validations }
      translations      = { translations }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardChanges         : getCorrectApp(state.application).cardChanges,
    cardType            : state.application.cardType,
    cardAction          : state.application.cardAction,
    dateOfBirth         : state.application.basics.dateOfBirth,
    focused             : state.ui.focus,
    validations         : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCardChanges, Page);
