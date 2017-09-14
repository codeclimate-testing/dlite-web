'use strict';

import React from 'react';
import SelectorButton from './selector-button.jsx';

const createSelector = (value, tabIndex, selected, props) => {
  return (
    <div key={value}>
      <SelectorButton
        name={props.name}
        value={value}
        selected={selected}
        onChange={props.onChange}
        tabIndex={tabIndex}
      />
      <div className='unit spacer'></div>
    </div>
  );
};

const selectorsForValues = (props) => {
  return props.values.map((value) => {
    let tabIndex = '-1';
    let selected = (props.selectedValue === value);
    let firstValue = props.values[0];

    if (selected || (!props.selectedValue && value === firstValue)) {
      tabIndex = '0';
    }

    return createSelector(
      value, tabIndex, selected, props
    );
  });
};

const SelectorCollection = (props) => {
  return (
    <div className='row selector-collection'>
      { selectorsForValues(props) }
    </div>
  );
}

export default SelectorCollection;

