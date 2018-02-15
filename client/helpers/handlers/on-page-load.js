'use strict';

import {
  changeSection,
  addApp
} from '../../actions';
import { addingApp }    from '../data/pathnames';

export default (dispatch) => {
  return (value, section) => {
    if (section.key === value) { return; }
    dispatch(changeSection(value));

    if (addingApp(value)) {
      dispatch(addApp(value.split('/')[0]));
    }
  };
};
