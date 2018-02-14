'use strict';

import React from "react";
import translations   from '../../../i18n';
import {
  DLAppExists
} from '../../../helpers/data/card-type'

const DLApplicationNotStarted = (props) => {
  document.title = 'Summary of my application';
  if(DLAppExists(props)) { return null; }

  return (
    <div className='summary-section'>
      <p>{translations.summaryPage.whatImDoing.nothing}</p>
    </div>
  );
};

export default DLApplicationNotStarted;

