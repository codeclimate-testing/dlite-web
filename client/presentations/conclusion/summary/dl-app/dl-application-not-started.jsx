'use strict';

import React          from "react";
import translations   from '../../../../i18n';
import AddAppLink     from '../Add-app-link.jsx';

import {
  DLAppExists
} from '../../../../helpers/data/card-type'

const DLApplicationNotStarted = (props) => {
  let locale = props.locale;
  document.title = 'Summary of my application';
  if(DLAppExists(props.application)) { return null; }

  return (
    <AddAppLink
      {...props}
      to      = '/driver-license'
    >
      <p>{translations[locale].summaryPage.whatImDoing.nothing}</p>
    </AddAppLink>
  );
};

export default DLApplicationNotStarted;

