'use strict'

import React from 'react';

import { updatePoliticalPartyPreference }   from '../../actions/index';
import Form                                 from '../../presentations/voter/political-party-preference-form.jsx';
import connectForm                          from '../../helpers/connect-form';
import navigateOnSubmit                     from '../../helpers/navigate-on-submit';
import * as dataPresent                     from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let value = props.politicalPartyPreference;
  const continueDisabled = !dataPresent.value(value);
  let onSubmit = navigateOnSubmit('/about-me/voter/ballot-language', props);

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      selectedValue={value}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    politicalPartyPreference: state.application.politicalPartyPreference
  };
}

export default connectForm(mapStateToProps, updatePoliticalPartyPreference, ConnectedForm);
