'use strict';

import React                from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const values = {
  Yes: 'Yes',
  No: 'No'
};

const VeteransQuestionnaire = (props) => {

  return (
    <div className='veterans-questionnaire-form'>
        <h2 className='question'>Have you ever served in the United States Military?</h2>
        <p>As a veteran, you may be eligible for benefits like disability compensation. Your license can also display the word “Veteran”.</p>
      <div>
        <RadioCollection 
          {...props}
          name='isVeteran'
          text={values}
        >
          <RadioSelector 
            value='Yes'
          />
          <RadioSelector 
            value='No'
          />
        </RadioCollection>
      </div>
    </div>
  );
};

export default VeteransQuestionnaire;
