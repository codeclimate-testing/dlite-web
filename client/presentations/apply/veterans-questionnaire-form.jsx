'use strict';

import React from 'react';

import HomeLink               from '../home-link.jsx';
import SelectorCollection     from '../selector-collection.jsx';
import SectionHeader          from '../section-header.jsx';

const OPTIONS = ['Yes', 'No'];

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='veterans-questionnaire-form'>
      <HomeLink />
      <SectionHeader
        number='2'
        name='My history'
      />

      <h4>Have you ever served in the United States Military?</h4>
      <h5>As a veteran, you may be eligible for benefits like disability compensation. Your license can also display the word “Veteran”.</h5>
        <div className='input-container'>
          <SelectorCollection
            name='isVeteran'
            values={OPTIONS}
            onChange={ props.onChange }
            selectedValue={props.selectedValue}
          />
        </div>
    </div>
  );
};

export default Form;
