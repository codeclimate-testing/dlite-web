'use strict';

import React from 'react';

const FAQDrawer = (props) => {

  return (
    <div className={props.faqDrawerClass}>
      {props.faqDrawerText}
    </div>
  );
}

export default FAQDrawer;
