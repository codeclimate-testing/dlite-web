'use strict';

import React                         from 'react';
import connectForm                   from '../../helpers/connect-form';
import handlers                      from '../../helpers/handlers';
import * as dataPresent              from '../../helpers/data-present';
import Presentation                  from "../../presentations/my-basics/traits-height-weight-page.jsx";
import { updateTraitsHeightWeight }  from "../../actions/index";
import { HeightWeightValidator }     from '../../helpers/validations';


const Page = (props) => {

  let validations = new HeightWeightValidator(props.traitsHeightWeight, props.validations);
  let onSubmit    = handlers.navigateOrShowErrors('heightWeight', props, validations);
  let onBack      = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit    = { onSubmit }
      onBack      = { onBack }
      validations = { validations }
    />
  );
};

function mapStateToProps(state) {
  return {
    traitsHeightWeight  : state.application.basics.traitsHeightWeight,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    flow                : state.ui.flow
  };
};

export default connectForm(mapStateToProps, updateTraitsHeightWeight, Page);
