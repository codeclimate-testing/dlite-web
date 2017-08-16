'use strict';

import React from 'react';

import { updateEyeColor }  from "../actions/index";
import EyeColorForm      from "../presentations/eye-color-form.jsx";
import connectForm        from '../helpers/connect-form';

const EyeColor = (props) => {

  return (
    <EyeColorForm onSubmit={props.onSubmit} onChange={props.onChange} eyeColor={props.eyeColor} />
  );
};

function mapStateToProps(state) {
  return {eyeColor: state.eyeColor};
}

export default connectForm(mapStateToProps, updateEyeColor, EyeColor);