'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { toggleAccordion } from '../actions';

import Presentation from '../presentations/accordion.jsx';

const Accordion = (props) => {
  let accordionState = 'closed';
  let accordionBol = 'false';
  let ariaHidden = 'true';

  props.accordions.forEach((d) => {
    if(d === props.id) {
      accordionState = 'open';
      accordionBol = 'true';
      ariaHidden = 'false';
    }
  });

  return (
    <Presentation
      {...props}
      accordionState={accordionState}
      accordionBol={accordionBol}
      ariaHidden={ariaHidden}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    accordions: state.ui.accordions,
    locale:     state.ui.locale
  };
}

const mapDispatchToProps = (dispatch) => {
  const onClick = (event) => {
    dispatch(toggleAccordion(event.target.getAttribute('accordion')));
  };

  return {
    onClick: onClick
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);

