'use strict';

import {
  changeSection,
  changePathname
 } from '../../actions';

const disableHyperLink = () => {
  var all_links = document.getElementsByTagName('a');
  for(var i=0; i<all_links.length; i++){
    if(all_links[i].target === "_blank") {
      all_links[i].removeAttribute("href");
    }
  }
}

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

    if(TST_ENV) {
      document.addEventListener('click', disableHyperLink);
    }
    setTimeout(focusHeader, 50);
    if (section.key === value) { return; }
    dispatch(changeSection(value));
  };
};
