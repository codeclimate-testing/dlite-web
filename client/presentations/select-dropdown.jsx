'use strict';

import React from 'react';

const makeId = (name, value) => {
  let id = `${name}-${value}`;
  return id.replace(/\./, '');
};

const dropDownOptions = (props) => {
  return props.values.map((value) => {
    let className = 'dropdown-option value-block';
    let id = makeId(props.name, value);

    if (value === props.selected) {
      className += ' selected';
    }

    if (value === props.hover) {
      className += '  hover';
    }

    return (
      <div
        className={ className }
        onClick={ props.onChange }
        key={ value }
        role='option'
        value={ value }
        name={ props.name }
        id={id}
      >
        {value}
      </div>
    );
  });
}

const selectClassName = 'select-dropdown';
const openClass = 'open';

const SelectDropdown = (props) => {
  let dropDownId = `dropdown-options-${props.name}`;
  let labelId = `label-${props.name}`;
  let className = `relative ${selectClassName}`;
  let id = props.id || props.name;

  if (props.focus === id) {
    className += ` ${openClass}`;
  }

  return (
    <div className='select-dropdown-container'>
      <label htmlFor={ props.name } id={ labelId }>
        { props.children ? props.children : props.description }
      </label>
      <div
        className={className}
        onClick={ props.onClick }
        onBlur={ props.onBlur }
        onKeyDown={ props.onKeyPress }
        tabIndex='0'
        id={ id }
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

SelectDropdown.makeId = makeId;
SelectDropdown.className = selectClassName;
SelectDropdown.openClass = openClass;

export default SelectDropdown;
