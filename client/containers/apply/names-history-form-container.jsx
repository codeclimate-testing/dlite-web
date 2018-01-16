'use strict';

import React                      from 'react';
import { updateNamesHistory }     from '../../actions/index';
import { NamesValidator }         from '../../helpers/validations';
import connectForm                from '../../helpers/connect-form';
import handlers                   from '../../helpers/handlers';
import Presentation               from '../../presentations/apply/names-history-page.jsx';

const Page = (props) => {
  let validations       = new NamesValidator(props.namesHistory, props.validations, 'selectionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('nameHistory', props, validations);
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
      validations       = { validations }
      onFocus           = { focus }
    />
  );
};

function mapStateToProps(state) {
  return {
    namesHistory: state.application.namesHistory,
    focused     : state.ui.focus,
    validations : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateNamesHistory, Page);

