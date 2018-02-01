'use strict';

import React from "react";
import translations   from '../../../i18n';
import {
  getID
} from '../../../helpers/data/card-type'

const IDApplicationNotStarted = (props) => {
  document.title = 'Summary of my application';
  if(getID(props)) { return null; }

  return (
    <div className='summary-section'>
      <p>{translations.summaryPage.whatImDoing.nothing}</p>
    </div>
  );
};

export default IDApplicationNotStarted;

