'use strict';

import React from 'react';

const dropDownOptions = (props) => {
  return props.values.map((value) => {
    let className = 'dropdown-option value-block';
    if (value === props.selected) {
      className += ' selected';
    }

    return (
      <div
        className={ className }
        onClick={ props.onChange }
        key={ value }
        role='option'
        value={ value }
        name={ props.name }
      >
        {value}
      </div>
    );
  });
}

const SelectDropdown = (props) => {
  let dropDownId = `dropdown-options-${props.name}`;
  let labelId = `label-${props.name}`;
  return (
    <div className='select-dropdown'>
      <label htmlFor={ props.name } id={ labelId }>
        { props.description }
      </label>
      <div
        className='relative dropdown'
        tabIndex='0'
        id={ props.name }
        role='combobox'
        aria-readonly='true'
        aria-autocomplete='none'
        aria-expanded='false'
        aria-owns={ dropDownId }
        aria-labelledby={ labelId }
      >
        <div className='value-block dropdown-selected'>
          { props.selected }
          <div className='icon unit-right'></div>
        </div>
        <div
          className='absolute dropdown-options'
          id={ dropDownId }
          role='listbox'
        >
          { dropDownOptions(props) }
        </div>
      </div>
    </div>
  );
};

export default SelectDropdown;
