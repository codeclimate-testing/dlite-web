'use strict';

import {
  changeSection,
  changePathname
 } from '../../actions';

const focusHeader = () => {
  let element = document.querySelector('#section-header');
  if (element) {
    element.focus();
  }
};

export default (dispatch) => {
  return (value, section, currentPage, savedPath) => {
    if (!currentPage || currentPage === savedPath) { return; }
    dispatch(changePathname(currentPage));
    setTimeout(focusHeader, 50);
    if (section.key === value) { return; }
    dispatch(changeSection(value));
  };
};
