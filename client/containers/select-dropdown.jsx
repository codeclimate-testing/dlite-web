'use strict';

import React from 'react';
import { connect } from 'react-redux';
import {
  hoverUp,
  hoverDown,
  clearHover,
  blurPageElement,
  focusPageElement
} from '../actions';

import Presentation from '../presentations/select-dropdown.jsx';
import selectDropdownHandlers from '../helpers/handlers/select-dropdown';

class SelectDropdown extends React.Component {
  scrollToHover() {
    let props = this.props;
    if (props.hover) {
      let id = Presentation.makeId(props.name, props.hover);
      document
        .querySelector(`#${id}`)
        .scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  componentDidUpdate() {
    this.scrollToHover();
  }

  render() {
    let props = this.props;
    return (
      <Presentation {...props} />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    hover: state.ui.hover,
    focus: state.ui.focus
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const handlers = selectDropdownHandlers(dispatch, ownProps, Presentation);

  return {
    onKeyPress: handlers.onKeyPress,
    onBlur: handlers.onBlur,
    onClick: handlers.toggleOpenState
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectDropdown);
