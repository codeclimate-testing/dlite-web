'use strict'

import React              from 'react'
import { arrayIncludes }  from '../helpers/data/validations';
import errorClass   from '../helpers/validations/error-class';

import {
  ErrorIcon,
  ErrorLabel
} from './validations.jsx';

const childPropsAdditions = (props, value, values) => {
  let selected = props.array[props.name].includes(value);
  let custom = props.custom ? props.custom : false;

  return {
    name    : props.name,
    key     : value,
    selected: selected,
    focused : props.focused,
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
  let errorName = errorClass(props);

  return (
    <div className='row checkbox-collection'>
      <div>
        <ErrorIcon errorClass={ errorName } />
        <ErrorLabel
          errorMessage={ props.errorMessage }
          errorClass={ errorName }
        />
      </div>
      { makeMeSomeChildren(props) }
    </div>
  );
}

export default CheckboxCollection;