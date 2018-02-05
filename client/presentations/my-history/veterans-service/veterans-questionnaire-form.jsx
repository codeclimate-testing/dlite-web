'use strict';

import React                from 'react';

import radioYesNoGroup      from '../../radio-yes-no-group.jsx';
import RadioCollection      from '../../radio-selector-collection.jsx';

const VeteransQuestionnaire = (props) => {
  return (
    <div className='veterans-questionnaire-form'>
        <h2 className='question'>Have you ever served in the United States Military?</h2>
        <p>As a veteran, you may be eligible for benefits like disability compensation. Your license can also display the word “Veteran”.</p>
      <div>
        <fieldset>
        <RadioCollection
          {...props}
          name='isVeteran'
        >
          { radioYesNoGroup() }
        </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default VeteransQuestionnaire;
