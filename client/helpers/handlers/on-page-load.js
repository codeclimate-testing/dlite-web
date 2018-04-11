'use strict';

import {
  changeSection,
  changePathname
 } from '../../actions';

export default (dispatch) => {
  return (value, section, currentPage, savedPath) => {
    if (!currentPage || currentPage === savedPath) { return; }
    dispatch(changePathname(currentPage));
    if (section.key === value) { return; }
    dispatch(changeSection(value));
  };
};
