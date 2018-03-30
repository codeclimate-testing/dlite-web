'use strict';

import React                    from 'react';
import connectForm              from '../../../helpers/connect-form';
import handlers                 from '../../../helpers/handlers';
import { NamePageValidator }    from '../../../helpers/validations';
import Presentation             from '../../../presentations/get-started/name-page.jsx';
import { updateCdlLegalName }   from '../../../actions/index';

const Page = (props) => {
  let validations       = new NamePageValidator(props.legalName, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('cdlLegalName', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);
  props.loadTranslationFromCookie(props.language);

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
    legalName:    state.cdl.basics.legalName,
    validations:  state.ui.validations,
    focused:      state.ui.focus,
    hover:        state.ui.hover,
    flow:         state.ui.flow,
    language:     state.ui.language
  };
};

export default connectForm(mapStateToProps, updateCdlLegalName, Page);