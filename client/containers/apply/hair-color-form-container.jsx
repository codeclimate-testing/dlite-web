'use strict';

import React from 'react';

import { updateHairColor }    from "../../actions/index";
import Form                   from '../../presentations/apply/hair-color-form.jsx';
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled  = !dataPresent.value(props.hairColor);
  let onSubmit          = navigateOnSubmit('/about-me/traits-height-weight', props);
  let pageTitle         = 'About me: Hair color';

  return (
    <Form
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
      onChange          = { props.onChange }
      selectedValue     = { props.hairColor }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    hairColor: state.application.hairColor
  };
}

export default connectForm(mapStateToProps, updateHairColor, ConnectedForm);

