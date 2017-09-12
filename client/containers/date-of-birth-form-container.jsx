'use strict';

import React from 'react';

import { updateDateOfBirth }  from "../actions/index";
import Form                   from "../presentations/date-of-birth-form.jsx";
import connectForm            from '../helpers/connect-form';

const ConnectedForm = (props) => {
  return (
    <Form
      onSubmit={props.onSubmit}
      onChange={props.onChange}
      dateOfBirth={props.dateOfBirth}
      history={props.history}
    />
  );
};

function mapStateToProps(state) {
  return {
    dateOfBirth: state.application.dateOfBirth
  };
}

export default connectForm(mapStateToProps, updateDateOfBirth, ConnectedForm);
