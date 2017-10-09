'use strict';

import React from 'react';

import { updateSex }          from '../../actions/index';
import Form                   from '../../presentations/motor/sex-form.jsx';
import connectForm            from '../../helpers/connect-form';
import navigateOnSubmit       from '../../helpers/navigate-on-submit';
import * as dataPresent       from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let continueDisabled  = !dataPresent.value(props.sex);
  let onSubmit          = navigateOnSubmit('/about-me/appearance/eye', props);
  let pageTitle         = 'About me: Sex identification';
  return (
    <Form
      pageTitle         = { pageTitle }
      onSubmit          = { onSubmit }
      onChange          = { props.onChange }
      selectedValue     = { props.sex }
      continueDisabled  = { continueDisabled }
    />
  );
};

function mapStateToProps(state) {
  return {
    sex: state.application.sex
  };
}

export default connectForm(mapStateToProps, updateSex, ConnectedForm);
