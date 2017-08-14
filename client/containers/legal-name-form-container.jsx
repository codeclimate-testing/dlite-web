'use strict';

import React from 'react';

import { updateLegalName }  from "../actions/index";
import LegalNameForm        from "../presentations/name-form.jsx";
import connectForm          from '../helpers/connect-form';

const LegalName = (props) => {
  return (
    <LegalNameForm
      onSubmit={props.onSubmit}
      onChange={props.onChange}
      legalName={props.legalName} />
  );
};

function mapStateToProps(state) {
  return {
    legalName: state.legalName
  };
}

export default connectForm(mapStateToProps, updateLegalName, LegalNameForm);
