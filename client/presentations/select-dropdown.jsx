'use strict';

import React from 'react';

const dropDownOptions = (props) => {
  return props.children.map((option) => {
    let className = 'dropdown-option value-block';
    if (option.props.value === props.selected) {
      className += ' selected';
    }

    return (
      <div
        className={ className }
        onClick={ props.onClick }
        key={ option.props.value }
      >
        {option.props.value}
      </div>
    );
  });
}

const SelectDropdown = (props) => {
  return (
    <div className='select-dropdown'>
      <select
        className='off-screen'
        name={ props.name }
        id={ props.name }
      >
        { props.children }
      </select>

      <label htmlFor={ props.name }>
        {props.description}
      </label>
      <div className='relative dropdown' tabIndex='0'>
        <div className='value-block dropdown-selected'>
          { props.selected }
          <div className='icon unit-right'></div>
        </div>
        <div className='absolute dropdown-options'>
          { dropDownOptions(props) }
        </div>
      </div>
    </div>
  );
};

export default SelectDropdown;
