'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';
import handlers               from '../../helpers/handlers';
import { updateCardChanges }  from '../../actions/index';
import Presentation           from '../../presentations/intro/correct-or-update-page.jsx';
import { ChangeValidator }    from '../../helpers/validations';

const Page = (props) => {
  let validations       = new ChangeValidator(props.cardChanges, props.validations, 'applicationActionMissing'); 
  let onSubmit          = handlers.navigateOrShowErrors('chooseCardChanges', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  let focus             =   function(e) {
    props.onFocusClearValidation(e);
    return props.onFocus(e);
  };
  
  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      selectedValue     = { props.cardChanges.correctOrUpdate }
      onFocus           = { focus }
      validations       = { validations }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardChanges         : state.application.cardChanges,
    cardType            : state.application.cardType,
    cardAction          : state.application.cardAction,
    dateOfBirth         : state.application.dateOfBirth,
    focused             : state.ui.focus,
    validations         : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateCardChanges, Page);
