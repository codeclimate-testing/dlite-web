'use strict';

import React from 'react';

import colorFormBuilder     from '../presentations/color-form-builder';
import { updateHairColor }  from "../actions/index";
import connectForm          from '../helpers/connect-form';

const COLORS = ['Auburn', 'Bald', 'Black', 'Blonde', 'Brown', 'Gray', 'Red', 'White', 'Other'];
const HairColorForm = colorFormBuilder(COLORS, 'hair');

const HairColor = (props) => {
  return (
    <HairColorForm
      onSubmit={props.onSubmit}
      onChange={props.onChange}
      hairColor={props.hairColor}
    />
  );
};

function mapStateToProps(state) {
  return {hairColor: state.application.hairColor};
}

export default connectForm(mapStateToProps, updateHairColor, HairColor);
