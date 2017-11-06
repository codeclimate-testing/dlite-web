'use strict';

import React from 'react';

const TextArea = (props) => {
  return (
    <div className='text-area-input-block'>
      <label htmlFor={ props.identifier }>{ props.description }</label>
      <div className="input-container">
        <textarea
          type="text"
          id={ props.identifier }
          name={ props.identifier }
          onChange={ props.onChange }
          value={ props.value }/>
      </div>
    </div>
  );
};

export default TextArea;
