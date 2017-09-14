'use strict';

import React from 'react';

import SelectorCollection      from './selector-collection.jsx';
import HomeLink                from './home-link.jsx';
import ContinueButton          from './continue-button.jsx';

const VALUES = ['Female', 'Male'];

const SexSelectorForm = (props) => {
  return (
    <div>
      <HomeLink />

      <form onSubmit={ props.onSubmit } className='sex-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='sex'
            values={VALUES}
            onChange={ props.onChange }
            selectedValue={ props.sex }
          />
        </div>

        <ContinueButton />
      </form>
    </div>
  );
};

export default SexSelectorForm;
