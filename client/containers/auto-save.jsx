'use strict'

import React       from 'react';
import ReactDOM    from 'react-dom';
import handlers    from '../helpers/handlers';
import { connect } from 'react-redux';
import {
  shouldAutoSave
 } from '../helpers/data/pathnames';

const mapStateToProps = (state) => {
  return {
    state:     state,
    chooseApp: state.ui.chooseApp
  };
}

class AutoSave extends React.Component {
  shouldComponentUpdate() {
    return false;
  };

  constructor(app) {
    super(app);
    this.app = app;
    this.handlers = handlers.autoSave(this.app.dispatch);
  }

  componentDidMount() {
    let app = this.app;
    let state = app.state;
    let handlers = this.handlers;
    if (shouldAutoSave(app)) {
      if(app.chooseApp === 'iddl') {
        handlers(state, 'application')
      } else if (app.chooseApp === 'cdl') {
        handlers(state, 'cdl')
      }
    }
  };

  render() {
    return null;
  }
};

export default connect(mapStateToProps)(AutoSave);
