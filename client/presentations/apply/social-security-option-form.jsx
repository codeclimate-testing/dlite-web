'use strict';

import React from 'react';

import HomeLink               from '../home-link.jsx';
import SelectorCollection     from '../selector-collection.jsx';

const OPTIONS = ['Yes', 'No'];

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='social-security-option-form'>
      <HomeLink />
      <h3>1 &raquo; My Basics</h3>
      <hr></hr>

      <h4>Do you have a Social Security Number?</h4>
      <h5>If you have a Social Security Number you must select Yes.</h5>
        <div className='input-container'>
          <SelectorCollection
            name='hasSocialSecurity'
            values={OPTIONS}
            onChange={ props.onChange }
            selectedValue={props.selectedValue}
          />
        </div>
    </div>
  );
};

export default Form;
