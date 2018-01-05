'use strict';

import React from 'react';

const calculateTabIndex = (props, value, values) => {
  let tabIndex  = '-1';
  let selected  = (props.selectedValue === value);
  let firstValue = values[0];

  if (selected || (!props.selectedValue && value === firstValue)) {
    tabIndex    = '0';
  }

  return tabIndex;
};

const childPropsAdditions = (props, value, values) => {
  const selected  = props.selectedValue === value;
  let tabIndex    = calculateTabIndex(props, value, values);
  let focus       = props.focused ? props.focused.split('-') : '';
  let focusedName = focus[0];
  let focusedValue = focus[1];
  let focused     = focusedValue === value && focusedName === props.name;
  let custom      = props.custom ? props.custom : false;
  let text        = props.text ? props.text[value] : ''

  return {
    name    : props.name,
    key     : value,
    selected: selected,
    tabIndex: tabIndex,
    focused : focused,
    custom  : custom,
    onChange: props.onChange,
    onBlur  : props.onBlur,
    onFocus : props.onFocus,
    text    : text
  };
};

const getValues = (children) => {
  return children.map((child) => { return child.props.value; });
};

const makeMeSomeChildren = (props) => {
  let children = props.children || [];
  let values   = getValues(children);

  return children.map((child) => {
    const additions = childPropsAdditions(props, child.props.value, values);
    return React.cloneElement(child, additions);
  });
};

const RadioSelectorCollection = (props) => {
  return (
    <div className='row radio-selector-collection'>
      { makeMeSomeChildren(props) }
    </div>
  );
}

export default RadioSelectorCollection;

