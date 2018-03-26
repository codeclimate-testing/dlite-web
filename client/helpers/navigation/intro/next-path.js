'use strict';

import { cdlApp }       from '../../data/pathnames';

export const chooseApplication = (props) => {
  let key = 'disclaimers';
  if (cdlApp(props.chooseApp)) {
    key = 'cdlDisclaimers';
  }
  return key;
};
