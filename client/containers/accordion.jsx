'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { toggleAccordion } from '../actions';

import Presentation from '../presentations/accordion.jsx';

const Accordion = (props) => {

  let accordionState = 'closed';

  props.accordions.forEach((d) => {
    if(d === props.id) {
      accordionState = 'open';
    }
  });

  return (
    <Presentation
      {...props}
      accordionState={accordionState}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    accordions: state.ui.accordions
  };
}

const mapDispatchToProps = (dispatch) => {
  const onClick = (event) => {
    dispatch(toggleAccordion(event.target.id));
  };

  return {
    onClick: onClick
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
