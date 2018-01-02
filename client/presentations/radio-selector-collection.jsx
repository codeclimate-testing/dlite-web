'use strict';

import React from 'react';

const calculateTabIndex = (props, value, values) => {
  let tabIndex = '-1';
  let selected = (props.selectedValue === value);
  let firstValue = values[0];

  if (selected || (!props.selectedValue && value === firstValue)) {
    tabIndex = '0';
  }

  return tabIndex;
};

const childPropsAdditions = (props, value, values) => {
  const selected = props.selectedValue === value;
  let tabIndex = calculateTabIndex(props, value, values);
  let focused = props.focused === value;
  let custom = props.custom ? props.custom : false;

  return {
    name: props.name,
    key: value,
    selected: selected,
    tabIndex: tabIndex,
    focused: focused,
    custom: custom,
    onChange: props.onChange,
    onBlur: props.onBlur,
    onFocus: props.onFocus
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

