'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const values = ['Yes', 'No'];

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div>
      <HomeLink />

      <h4>Have you ever applied for a Driver License or ID card under a different name?</h4>
      <form onSubmit={ props.onSubmit } className='previous-names-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='previousNames'
            values={values}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <ContinueButton disabled={props.continueDisabled}/>
      </form>
    </div>
  );
};

export default Form;
