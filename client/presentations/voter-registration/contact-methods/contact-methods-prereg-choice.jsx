'use strict';

import React              from 'react';

import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';

const values = {
  Yes: 'Yes',
  No: 'No',
  Skip: 'Skip Section'
};

const PreRegContactChoice = (props) => {

  return (

      <div className='contact-methods-choice-form'>
        <h4>Would you like to receive election information via email or text</h4>
        <div className='inner-bottom'>
          <RadioCollection  
            {...props}
            name='shouldContact'
            text={values}
          >
            <RadioSelector 
              value='Yes'
            />
            <RadioSelector 
              value='No'
            />
            <RadioSelector 
              value='Skip'
            />
          </RadioCollection>
        </div>

        <div className='inner-bottom'>
          <h4>Who gets this information?</h4>
          <p>Secretary of State and County election officials have access to this information.</p>
        </div>
      </div>

  );
};

export default PreRegContactChoice;
