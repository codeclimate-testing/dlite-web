'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Presentation from '../presentations/page.jsx';
import handlers from '../helpers/handlers';

const Page = (props) => {
  props.onPageLoad(props.sectionKey, props.section);

  return (
    <Presentation {...props} />
  );
};

const mapStateToProps = (state) => {
  return {
    cardType:  state.application.cardType,
    section:   state.ui.section
  };
}

const mapDispatchToProps = (dispatch) => {
  const onPageLoad = handlers.onPageLoad(dispatch);

  return {
    onPageLoad
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
