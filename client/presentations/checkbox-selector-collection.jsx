'use strict'

import React              from 'react'
import { arrayIncludes }  from '../helpers/data/validations';

const childPropsAdditions = (props, value, values) => {
  let selected = props.array[props.name].includes(value);
  let focused = props.focused === value;
  let custom = props.custom ? props.custom : false;

  return {
    name    : props.name,
    key     : value,
    selected: selected,
    focused : focused,
    custom  : custom,
    onChange: props.onChange,
    onBlur  : props.onBlur,
    onFocus : props.onFocus,
    text    : props.text[value]
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

const CheckboxCollection = (props) => {
  return (
    <div className='row checkbox-collection'>
      { makeMeSomeChildren(props) }
    </div>
  );
}

export default CheckboxCollection;