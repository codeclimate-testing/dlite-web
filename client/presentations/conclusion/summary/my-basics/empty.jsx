'use strict';

import React            from "react";
import * as dataPresent from '../../../../helpers/data-present';

const Empty = (props) => {
  document.title = 'Summary of my application';
  if (dataPresent.application(props)) { return null; }

  return (
    <div className='summary-section'>
      <p>No information has been entered yet</p>
    </div>
  );
};

export default Empty;
