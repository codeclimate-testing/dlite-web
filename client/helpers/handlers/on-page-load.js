'use strict';
import { changeSection }  from '../../actions';

export default (dispatch) => {
  return (value, section) => {
    if (section.key === value) { return; }
    dispatch(changeSection(value));
  };
};
