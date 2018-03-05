'use strict';

import React                        from 'react';
import connectForm                  from '../../../helpers/connect-form';
import * as dataPresent             from '../../../helpers/data-present';
import handlers                     from '../../../helpers/handlers';
import Presentation                 from '../../../presentations/my-basics/physical-traits-page.jsx';
import { updateCdlPhysicalTraits }  from '../../../actions/index';
import { PhysicalTraitsValidator }  from '../../../helpers/validations';

const Page = (props) => {
  let locale      = props.locale;
  let validations = new PhysicalTraitsValidator(Object.assign(props.physicalTraits, {locale}), props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('cdlSexEyeHair', props, validations);
  let onBack      = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit    = { onSubmit }
      onBack      = { onBack }
      validations = { validations }
    />
  );
}

function mapStateToProps(state) {
  return {
    physicalTraits: state.cdl.basics.physicalTraits,
    focused:        state.ui.focus,
    validations:    state.ui.validations,
    locale:         state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCdlPhysicalTraits, Page);

