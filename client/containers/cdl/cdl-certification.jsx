'use strict';

import React                      from 'react';
import handlers                   from '../../helpers/handlers';
import { SelectionValidator }     from '../../helpers/validations';
import Presentation               from '../../presentations/cdl/certification-page.jsx';
import { updateCDLCert }          from '../../actions/index';
import connectForm                from '../../helpers/connect-form';

const Page = (props) => {
  let locale            =   props.locale;
  let validations       =   new SelectionValidator(Object.assign(props.certification, {locale}), props.validations, 'applicationActionMissing');
  let onSubmit          =   handlers.navigateOrShowErrors('cdlCertification', props, validations);
  let onBack            =   handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      certification     = { props.certification }
      validations       = { validations }
      dateOfBirth       = { props.dateOfBirth }
    />
  );
};

function mapStateToProps(state) {
  return {
    focused:        state.ui.focus,
    cardAction:     state.cdl.cardAction,
    dateOfBirth:    state.cdl.basics.dateOfBirth,
    certification:  state.cdl.certification,
    locale:         state.ui.locale,
    validations:    state.ui.validations,
    flow:           state.ui.flow
  };
};


export default connectForm(mapStateToProps, updateCDLCert, Page);
