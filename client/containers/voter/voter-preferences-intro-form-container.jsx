'use strict';

import React                      from 'react';
import { connect }                from 'react-redux';

import connectForm                    from '../../helpers/connect-form';
import Form                           from '../../presentations/voter/voter-preferences-intro-form.jsx';
import navigateOnSubmit               from '../../helpers/navigate-on-submit';

const ConnectedForm = (props) => {
  const continueDisabled = false;
  const onSubmit = navigateOnSubmit('/about-me/voter/political-party', props);

  return (
    <Form
      onSubmit={onSubmit}
      continueDisabled={continueDisabled}
    />
  );
};

function mapStateToProps(state) {
  return { };
}

export default connectForm(mapStateToProps, undefined, ConnectedForm);
