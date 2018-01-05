'use strict';

import React                        from 'react';
import connectForm                  from '../../helpers/connect-form';

import handlers                     from '../../helpers/handlers';
import * as dataPresent             from '../../helpers/data-present';

import { updatePhysicalTraits }     from '../../actions/index';
import Presentation                 from '../../presentations/apply/physical-traits-page.jsx';

const Page = (props) => {
  let continueDisabled  = !(dataPresent.physicalTraits(props.physicalTraits))
  let onSubmit          = handlers.navigateOnSubmit('/my-basics/traits-height-weight', props);
  let onBack            = handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      continueDisabled  = { continueDisabled }
    />
  );
}

function mapStateToProps(state) {
  return {
    physicalTraits: state.application.physicalTraits,
    focused:        state.ui.focus
  };
};

export default connectForm(mapStateToProps, updatePhysicalTraits, Page);

