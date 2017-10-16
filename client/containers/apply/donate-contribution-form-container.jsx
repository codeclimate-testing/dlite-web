'use strict';

import React from 'react';

import { updateDonateContribution }            from "../../actions/index";
import Form                                    from '../../presentations/apply/donate-contribution-form.jsx';
import connectForm                             from '../../helpers/connect-form';
import navigateOnSubmit                        from '../../helpers/navigate-on-submit';
import * as dataPresent                        from '../../helpers/data-present';

const ConnectedForm = (props) => {
  const continueDisabled = false;
  const onSubmit = navigateOnSubmit('/voter/voter-introduction', props);

  return (
    <Form
      onSubmit={onSubmit}
      onChange={props.onChange}
      selectedValue={props.donateContribution}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return {
    donateContribution: state.application.donateContribution
  };
}

export default connectForm(mapStateToProps, updateDonateContribution, ConnectedForm);
