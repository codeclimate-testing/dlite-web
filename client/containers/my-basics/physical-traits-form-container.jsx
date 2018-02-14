'use strict';

import React                        from 'react';
import connectForm                  from '../../helpers/connect-form';
import * as dataPresent             from '../../helpers/data-present';
import handlers                     from '../../helpers/handlers';
import Presentation                 from '../../presentations/my-basics/physical-traits-page.jsx';
import { updatePhysicalTraits }     from '../../actions/index';
import { PhysicalTraitsValidator }  from '../../helpers/validations';

const Page = (props) => {
  let validations = new PhysicalTraitsValidator(props.physicalTraits, props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('sexEyeHair', props, validations);
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
    physicalTraits: state.application.basics.physicalTraits,
    focused:        state.ui.focus,
    validations:    state.ui.validations
  };
};

export default connectForm(mapStateToProps, updatePhysicalTraits, Page);

