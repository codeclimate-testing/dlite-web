'use strict';

import React from 'react';

import colorFormBuilder     from '../presentations/color-form-builder';
import { updateEyeColor }   from "../actions/index";
import connectForm          from '../helpers/connect-form';

const COLORS = ['Blue', 'Gray', 'Green', 'Hazel', 'Brown'];
const EyeColorForm = colorFormBuilder(COLORS, 'eye');

const EyeColor = (props) => {
  return (
    <EyeColorForm
      onSubmit={props.onSubmit}
      onChange={props.onChange}
      eyeColor={props.eyeColor}
    />
  );
};

function mapStateToProps(state) {
  return {eyeColor: state.application.eyeColor};
}

export default connectForm(mapStateToProps, updateEyeColor, EyeColor);
