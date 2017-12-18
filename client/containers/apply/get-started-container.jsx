'use strict';

import React from 'react';

import Form               from "../../presentations/apply/intro.jsx";
import connectForm        from '../../helpers/connect-form';
import navigateOnSubmit   from '../../helpers/navigate-on-submit';
import navigateOnBack     from '../../helpers/navigate-on-back';

const ConnectedForm = (props) => {

  let onBack = navigateOnBack(props);

  return (
    <Form
      onBack = { onBack }
    />
  );
};

function mapStateToProps(state) {
  return {
    cardType: state.application.cardType,
    seniorID: state.application.seniorID
  };
}

export default connectForm(mapStateToProps, null, ConnectedForm);
