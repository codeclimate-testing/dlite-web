'use strict';

import React from "react";
import translations   from '../../../i18n';
import AddAppLink     from '../../add-app-link.jsx';
import {
  IDAppExists
} from '../../../helpers/data/card-type'

const IDApplicationNotStarted = (props) => {
  document.title = 'Summary of my application';
  if(IDAppExists(props)) { return null; }

  return (
    <AddAppLink
      to = '/id-card'
    >
      <p>{translations.summaryPage.whatImDoing.nothing}</p>
    </AddAppLink>
  );
};

export default IDApplicationNotStarted;

