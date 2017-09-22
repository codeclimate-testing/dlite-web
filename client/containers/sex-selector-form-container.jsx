'use strict';

import React from 'react';

import { updateSex }  from '../actions/index';
import Form                   from '../presentations/sex-form.jsx';
import connectForm            from '../helpers/connect-form';
import navigateOnSubmit       from '../helpers/navigate-on-submit';
import * as dataPresent       from '../helpers/data-present';

const ConnectedForm = (props) => {
  const continueDisabled = !dataPresent.value(props.sex);
  const onSubmit = navigateOnSubmit('/about-me/appearance/eye', props);

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      selectedValue={props.sex}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    sex: state.application.sex
  };
}

export default connectForm(mapStateToProps, updateSex, ConnectedForm);
