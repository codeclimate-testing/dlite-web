'use strict';

import React from 'react';

import SelectorCollection      from './selector-collection.jsx';
import HomeLink                from './home-link.jsx';
import ContinueButton          from './continue-button.jsx';

const values = ['Yes', '$2 voluntary contribution to support and promote organ and tissue donation']

const Form = (props) => {
  return (
    <div>
      <HomeLink />

      <h4>Do you want to participate in organ and tissue donation or make a voluntary contribution to support and promote organ and tissue donation?</h4>
      <form onSubmit={ props.onSubmit } className='organ-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='organ'
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
