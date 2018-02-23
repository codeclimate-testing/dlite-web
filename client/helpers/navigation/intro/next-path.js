'use strict';

import { cdlApp }       from '../../data/pathnames';

export const chooseApplication = (props) => {
  let key = 'welcome';
  if (cdlApp(props.chooseApp)) {
    key = 'cdl';
  }
  return key;
};