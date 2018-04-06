'use strict';

import React from 'react';

export default  (props) => {

  let filePath = 'file://C:\index.mht';

  const simulateClick = (e) => {
    e.click()
  };

  return  <a href={filePath} style={{visibility: 'hidden'}} ref={simulateClick} />
}