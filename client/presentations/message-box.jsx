'use strict';

import React from 'react';

const MessageBox = (props) => {
  let iconClass = `${props.className || ''} icon`;
  return (
    <div className='message-box hang-left' role="alert" aria-live="assertive" aria-atomic="true">
      <div className='flag-hanger'>
        <div className={ iconClass }></div>
      </div>
      <div className='inner message'>
        { props.children }
      </div>
    </div>
  );
};

export default MessageBox;
