'use strict';

import React from 'react';

import SelectorCollection     from '../selector-collection.jsx';

const OPTIONS = ['Yes', 'No'];
const driversLicense = 'Drivers License';
let cardType = 'ID';

const Form = (props) => {
  if(props.cardType.DL) {
    cardType = driversLicense;
  } else {
    cardType;
  }

  return (
    <div className='veterans-previous-designation-form'>
      <h4>Is "Veteran" printed on your {cardType}?</h4>
      <div className='input-container'>
        <SelectorCollection
          name='previouslyDesignated'
          values={OPTIONS}
          onChange={ props.onChange }
          selectedValue={props.selectedValue}
        />
      </div>
    </div>
  );
};

export default Form;
