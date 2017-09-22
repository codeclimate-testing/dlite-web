'use strict';

import React from 'react';

import { updateHairColor }   from "../actions/index";
import Form                   from '../presentations/hair-color-form.jsx';
import connectForm            from '../helpers/connect-form';
import navigateOnSubmit       from '../helpers/navigate-on-submit';
import * as dataPresent       from '../helpers/data-present';

const ConnectedForm = (props) => {
  const continueDisabled = !dataPresent.value(props.hairColor);
  const onSubmit = navigateOnSubmit('/about-me/height', props);

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      selectedValue={props.hairColor}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    hairColor: state.application.hairColor.hairColor
  };
}

export default connectForm(mapStateToProps, updateHairColor, ConnectedForm);

