'use strict';

import React from 'react';

import { updateResidenceAddress }  from "../actions/index";
import ResidenceAddress from "../presentations/residence-address-form.jsx";
import connectForm      from '../helpers/connect-form';

const ResidenceAddressContainer = (props) => {
  return (
    <ResidenceAddress
      onSubmit={props.onSubmit}
      onChange={props.onChange}
      residenceAddress={props.residenceAddress}
    />
  );
};

function mapStateToProps(state) {
  return {
    residenceAddress: state.residenceAddress
  };
}

export default connectForm(mapStateToProps, updateResidenceAddress, ResidenceAddressContainer);
