'use strict';

import React                          from 'react';
import connectForm                    from '../../helpers/connect-form';

import handlers                       from '../../helpers/handlers';
import { LicenseHistoryValidator }    from '../../helpers/validations';
import { updateLicenseAndIdHistory }  from '../../actions/index';
import Presentation                   from '../../presentations/my-history/card-history-page.jsx';

const Page = (props) => {
  let locale            = props.locale;
  let validations       = new LicenseHistoryValidator(Object.assign(props.licenseAndIdHistory, {locale}), props.validations);
  let onSubmit          = handlers.navigateOrShowErrors(props.addressName, props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    licenseAndIdHistory : state.application.history.licenseAndIdHistory,
    cardType            : state.application.cardType,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    locale              : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateLicenseAndIdHistory, Page);
