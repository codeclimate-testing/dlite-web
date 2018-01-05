'use strict';

import React                from 'react';

import RadioSelector        from '../../radio-selector.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const VeteransQuestionnaire = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };

  return (
    <div className='veterans-questionnaire-form'>
        <h4>Have you ever served in the United States Military?</h4>
        <h5>As a veteran, you may be eligible for benefits like disability compensation. Your license can also display the word “Veteran”.</h5>
      <div className='inner-bottom'>
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
