'use strict';

import React from 'react';

import { updatePoliticalPartyChoose }   from '../../actions/index';
import Form                           from '../../presentations/voter/political-party-choose-form.jsx';
import connectForm                    from '../../helpers/connect-form';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';
import * as dataPresent               from '../../helpers/data-present';

const ConnectedForm = (props) => {
  let value = props.politicalPartyChoose;
  const continueDisabled = !dataPresent.value(value);
  let onSubmit = navigateOnSubmit('/about-me/voter/ballot-language', props);

  if(value === 'Yes') {
    onSubmit = navigateOnSubmit('/about-me/voter/political-party', props);
  } else {
    onSubmit;
  };

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
    politicalPartyChoose: state.application.politicalPartyChoose
  };
}

export default connectForm(mapStateToProps, updatePoliticalPartyChoose, ConnectedForm);
