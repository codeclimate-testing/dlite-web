'use strict';

import {
  hoverUp,
  hoverDown,
  clearHover,
  blurPageElement,
  focusPageElement
} from '../../actions';

const findTarget = (target, className) => {
  if (stringContains(target.className, className)) {
    return target;
  } else {
    return findTarget(target.parentNode, className);
  }
};

const stringContains = (string, substring) => {
  return string.indexOf(substring) > -1;
};

const selectDropdownHandlers = (dispatch, ownProps, Presentation) => {
  const closeDropdownIfOpen = (target) => {
    if (stringContains(target.className, Presentation.openClass)) {
      dispatch(blurPageElement(target.id));
      dispatch(clearHover());
    }
  };

  const openDropdownIfClosed = (target) => {
    if (!stringContains(target.className, Presentation.openClass)) {
      dispatch(focusPageElement(target.id));
    }
  };

  // ---------------

  const onArrowUp = (event) => {
    event.preventDefault();
    dispatch(hoverUp(ownProps.values));

    let target = findTarget(
      event.target,
      Presentation.className
    );

    openDropdownIfClosed(target);
  };

  const onArrowDown = (event) => {
    event.preventDefault();
    dispatch(hoverDown(ownProps.values));

    let target = findTarget(
      event.target,
      Presentation.className
    );

    openDropdownIfClosed(target);
  };

  const onBlur = (event) => {
    let target = findTarget(
      event.target,
      Presentation.className
    );

    closeDropdownIfOpen(target);
  };

  const onEnter = (event) => {
    event.preventDefault();
    let name = ownProps.name;
    let value = ownProps.hover;
    dispatch(ownProps.changeAction(name, value));
    onBlur(event);
  };

  const onEscape = (event) => {
    event.preventDefault();
    onBlur(event);
  };

  const onKeyPress = (event) => {
    if (event.keyCode === 38) {
      onArrowUp(event);
    } else if (event.keyCode === 40) {
      onArrowDown(event);
    } else if (event.keyCode === 13) {
      onEnter(event);
    } else if (event.keyCode === 27) {
      onEscape(event);
    }
  }

  const toggleOpenState = (event) => {
    let target = findTarget(
      event.target,
      Presentation.className
    );

    openDropdownIfClosed(target);
    closeDropdownIfOpen(target);
  };

  return {
    onArrowUp,
    onArrowDown,
    onEnter,
    onEscape,

    onKeyPress,
    onBlur,
    toggleOpenState,

    findTarget
  }
};

export default selectDropdownHandlers;
