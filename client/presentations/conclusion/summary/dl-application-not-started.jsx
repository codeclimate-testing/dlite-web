'use strict';

import React from "react";
import translations   from '../../../i18n';
import {
  getDL
} from '../../../helpers/data/card-type'

const DLApplicationNotStarted = (props) => {
  document.title = 'Summary of my application';
  if(getDL(props)) { return null; }

  return (
    <div className='summary-section'>
      <p>{translations.summaryPage.whatImDoing.nothing}</p>
    </div>
  );
};

export default DLApplicationNotStarted;

