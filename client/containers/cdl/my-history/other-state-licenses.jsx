'use strict';

import React                            from 'react';
import { updateCDLOtherStateLicenses }  from '../../../actions/index';
import { OtherStateLicenseValidator }   from '../../../helpers/validations';
import connectForm                      from '../../../helpers/connect-form';
import handlers                         from '../../../helpers/handlers';
import Presentation                     from '../../../presentations/cdl/my-history/other-state-licenses-page.jsx';

const Page = (props) => {
  let validations = new OtherStateLicenseValidator(props.otherStateLicenses, props.validations, 'selectionMissing');
  let onSubmit    = handlers.navigateOrShowErrors('cdlOtherStateLicenses', props, validations);
  let onBack      = handlers.navigateOnBack(props, validations);

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
    otherStateLicenses  : state.cdl.history.otherStateLicenses,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    flow                : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateCDLOtherStateLicenses, Page);

