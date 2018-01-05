'use strict';

import React                          from 'react';
import connectForm                    from '../../helpers/connect-form';

import handlers                       from '../../helpers/handlers';
import * as dataPresent               from '../../helpers/data-present';

import { updateLicenseAndIdHistory }  from '../../actions/index';
import Presentation                   from '../../presentations/apply/card-history-page.jsx';

const Page = (props) => {
  let continueDisabled    = !(dataPresent.licenseAndIdHistory(props.licenseAndIdHistory));
  let onSubmit            = handlers.navigateOnSubmit('/my-history/names/', props);
  let onBack              = handlers.navigateOnBack(props);

  return (
    <Presentation 
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    licenseAndIdHistory:  state.application.licenseAndIdHistory,
    cardType:             state.application.cardType,
    focused:              state.ui.focus
  };
};

export default connectForm(mapStateToProps, updateLicenseAndIdHistory, Page);
