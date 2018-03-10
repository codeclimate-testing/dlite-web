'use strict';

import { cdlApp }       from '../../data/pathnames';

export const chooseApplication = (props) => {
  let key = 'IDme';
  if (cdlApp(props.chooseApp)) {
    key = 'cdlLegalName';
  }
  return key;
};
