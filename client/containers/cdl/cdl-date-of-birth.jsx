'use strict';

import React                    from 'react';
import connectForm              from '../../helpers/connect-form';
import handlers                 from '../../helpers/handlers';
import { DOBValidator }         from '../../helpers/validations';
import Presentation             from '../../presentations/cdl/cdl-date-of-birth.jsx';
import { updateCdlDob }         from '../../actions/index';

const Page = (props) => {
  let validations       = new DOBValidator(props.dateOfBirth, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlDateofBirth', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onBack      = {onBack}
      onSubmit    = { onSubmit }
      validations = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth:  state.CDL.basics.dateOfBirth,
    validations:  state.ui.validations,
    focused:      state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateCdlDob, Page);