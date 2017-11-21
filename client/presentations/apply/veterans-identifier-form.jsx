'use strict';

import React from 'react';

import HomeLink               from '../home-link.jsx';
import SelectorCollection     from '../selector-collection.jsx';

const OPTIONS = ['Yes', 'No'];

const Form = (props) => {
  return (
    <div className='veterans-identifier-form'>
      <h4>Would you like to add the word “Veteran” on your license for a $5 fee?</h4>
      <h5>Many organizations give discounts with a valid military ID.</h5>
      <div className='input-container'>
        <SelectorCollection
          name='veteransIdentifier'
          values={OPTIONS}
          onChange={ props.onChange }
          selectedValue={props.selectedValue}
        />
      </div>
      { props.selectedValue === 'Yes' &&
        <div className='veteran-identifier-fee'>
          <h5>OK, we will add the $5 to your total fee.</h5>
        </div>
      }

    </div>
  );
};

export default Form;
