'use strict';

import React from 'react';

const FAQDrawer = (props) => {

  return (
    <div className={props.faqDrawerClass}>
      <p> {props.faqDrawerText} </p>
    </div>
  );
}

export default FAQDrawer;
