'use strict';

import React from 'react';

const Option = (props) => {
  return (
    <option value={ props.identifier }>{ props.identifier }</option>
  );
};

const suffixList = ['', 'Sr.', 'Jr.', 'II', 'III', 'IV'];

const SuffixSelector = (props) => {
  let id = 'suffix';
  let value = props.value;

  let options = suffixList.map((_suffix) => {
    let selected = (value === _suffix);
    return <Option
              key={_suffix}
              identifier={_suffix}
              value={props.value}
            />;
  });

  return (
    <div className='select-input-block'>
      <label className='row' htmlFor={id}>Suffix</label>
      <select name={ props.identifier } id={id} value={value} onChange={props.onChange} >
        { options }
      </select>
    </div>
  );
};

export default SuffixSelector;
