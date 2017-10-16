'use strict';

import React from 'react';

const RadiosForValues = (props) => {
  return props.values.map((value) => {
    return  (
      <div key={value}>
      <label
        className='radio-selector unit relative'
        htmlFor={value}
      >
        <input
            type='radio'
            name={props.name}
            id={value}
            value={value}
            checked={props.selectedValue === value}
            onChange={props.onChange}
          />
          {value}
        </label>
        <div className='unit spacer'></div>
        <br />
      </div>
    );
  });
};

const RadioCollection = (props) => {
  return (
    <div className='row radio-collection'>
      { RadiosForValues(props) }
    </div>
  );
}

export default RadioCollection;

