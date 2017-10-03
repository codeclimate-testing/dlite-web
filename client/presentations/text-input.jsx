'use strict';

import React from 'react';

const TextInput = (props) => {
  let id = props.identifier;
  if (props.type) {
    let upcased = props.identifier[0].toUpperCase() + props.identifier.slice(1);
    id = `${props.type}${upcased}`;
  }

  return (
    <div className='text-input-block'>
      <label htmlFor={ id }>{ props.description }</label>
      { props.example && <h5>Example: { props.example } </h5> }
      <div className="input-container">
        <input
          type="text"
          id={ id }
          name={ props.identifier }
          onChange={ props.onChange }
          value={ props.value }/>
      </div>
    </div>
  );
};

export default TextInput;
