'use strict';

import React from 'react';

import HomeLink               from '../../home-link.jsx';
import SelectorCollection     from '../../selector-collection.jsx';

const VeteransQuestionnaire = (props) => {
  return (
    <div className='veterans-questionnaire-form'>
        <h4>Have you ever served in the United States Military?</h4>
        <h5>As a veteran, you may be eligible for benefits like disability compensation. Your license can also display the word “Veteran”.</h5>
      <div className='inner-bottom'>
        <SelectorCollection
          name='isVeteran'
          values={['Yes', 'No']}
          onChange={ props.onChange }
          selectedValue={ props.selectedValue }
        />
      </div>
    </div>
  );
};

export default VeteransQuestionnaire;
