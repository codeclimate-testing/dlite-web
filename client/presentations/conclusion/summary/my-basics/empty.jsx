'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';
import Translator       from '../../../../i18n/translator-tag.jsx';

const Empty = (props) => {
  document.title = 'Summary of my application';
  if (dataPresent.myBasics(props)) { return null; }

  return (
    <div className='summary-section'>
      <Translator
        tag             = 'p'
        translationPath = 'newExtracted.conclusion.summary.noInfo'
      />
    </div>
  );
};

export default Empty;
