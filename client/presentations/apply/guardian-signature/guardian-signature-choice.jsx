'use strict';

import React from 'react';

import SelectorCollection from '../../selector-collection.jsx';

const SignatureChoice = (props) => {

  return (
    <div className='signature-choice-form'>
      <h4>Because you are under 18, you will need a parent or guardian signature.</h4>
      <p>If you have more than one parent or guardian with custody, both must sign.</p>
      <h4>Is your parent/guardian available to sign your application?</h4>
      <div className='inner-bottom'>
        <SelectorCollection
          name='isSigned'
          values={['Yes', 'No']}
          onChange={props.onFirstChange}
          selectedValue={props.selectedValue}
        />
      </div>
    </div>
  );
};

export default SignatureChoice;
