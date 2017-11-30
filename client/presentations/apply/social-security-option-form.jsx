'use strict';

import React from 'react';

import HomeLink               from '../home-link.jsx';
import SelectorCollection     from '../selector-collection.jsx';
import Page               from '../page.jsx';

const OPTIONS = ['Yes', 'No'];

const Form = (props) => {
  return (
    <Page
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <div className='social-security-option-form'>
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
    </Page>
  );
};

export default Form;
