'use strict';

import React from 'react';

import HomeLink               from '../home-link.jsx';
import SelectorCollection     from '../selector-collection.jsx';

const OPTIONS = ['Yes', 'No'];

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='interstitial-address-form'>
      <HomeLink />

      <h4>Do you receive mail at this address too?</h4>
      <h5>The DMV will print your Mailing Address on your Driver License</h5>

      <form onSubmit={props.onSubmit}>
        <div className='input-container'>
          <SelectorCollection
            name='isSameAsHome'
            values={OPTIONS}
            onChange={ props.onChange }
          />
        </div>
      </form>
    </div>
  );
};

export default Form;

