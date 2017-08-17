'use strict';

import React from 'react';

import { updateHairColor }  from "../actions/index";
import HairColorForm      from "../presentations/hair-color-form.jsx";
import connectForm        from '../helpers/connect-form';

const HairColor = (props) => {
  return (
    <HairColorForm onSubmit={props.onSubmit} onChange={props.onChange} hairColor={props.hairColor} />
  );
};

function mapStateToProps(state) {
  return {hairColor: state.hairColor};
}

export default connectForm(mapStateToProps, updateHairColor, HairColor);