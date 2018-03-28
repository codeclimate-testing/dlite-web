'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Presentation             from '../presentations/page.jsx';
import handlers                 from '../helpers/handlers';
import {
  getTextFromState,
  getAppType
} from '../helpers/data/pathnames';

const Page = (props) => {
  let sectionKey = getTextFromState(props, props.sectionKey, '');
  props.onPageLoad(sectionKey, props.section);
  let appName = getAppType(props);
  //let setIntervalProps = '';

  // setInterval(function() {
  //   console.log('here')
  //   props.onIntervalSave(props.state.application)
  // }, 3000)

  //setInterval(function() {
  //  if(props.chooseApp === 'iddl') {
  //    console.count()
  //    setIntervalProps = props.state.application
  //  }

  //  if(props.chooseApp === 'cdl') {
  //    setIntervalProps = props.state.cdl
  //  }

  //  props.onIntervalSave(setIntervalProps)

  //}, 30000)

  //if(props.chooseApp === 'iddl') {
  //  console.count();
  //  setInterval(function() {
  //    props.onIntervalSave(props.state.application);
  //  }, 30000)
  //}
  //if(props.chooseApp === 'cdl') {
  //  setInterval(function() {
  //    props.onIntervalSave(props.state.cdl);
  //  }, 10000)
  //}

  return (
    <Presentation {...props}
      appName = {appName}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    cardType:       state.application.cardType,
    chooseApp:      state.ui.chooseApp,
    section:        state.ui.section,
    state:          state
  };
}

const mapDispatchToProps = (dispatch) => {
  const onPageLoad            = handlers.onPageLoad(dispatch);
  const onIntervalSave        = handlers.onIntervalSave(dispatch);

  return {
    onPageLoad,
    onIntervalSave
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
