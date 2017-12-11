'use strict';

import React from 'react';

const SelectorContents = (props) => {
  const iconClass = 'icon-region unit ' + props.iconClass || '';
  const text = props.text || props.value;
  return (
    <div className='unit selector-contents'>
      <div className={iconClass} />
      <div className='text-region last-unit'>{text}</div>
    </div>
  );
};

export default SelectorContents;
