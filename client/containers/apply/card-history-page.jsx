'use strict';

import React                          from 'react';
import connectForm                    from '../../helpers/connect-form';

import handlers                       from '../../helpers/handlers';
import { LicenseHistoryValidator }    from '../../helpers/validations';
import { updateLicenseAndIdHistory }  from '../../actions/index';
import Presentation                   from '../../presentations/apply/card-history-page.jsx';

const Page = (props) => {
  let validations       = new LicenseHistoryValidator(props.licenseAndIdHistory, props.validations);
  let onSubmit          = handlers.navigateOrShowErrors('licenseHistory', props, validations);
  let onBack            = handlers.navigateOnBack(props);
  
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
    licenseAndIdHistory : state.application.licenseAndIdHistory,
    cardType            : state.application.cardType,
    focused             : state.ui.focus,
    validations         : state.ui.validations
  };
};

export default connectForm(mapStateToProps, updateLicenseAndIdHistory, Page);
