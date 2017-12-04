'use strict';

import React from 'react';

import HomeLink               from '../home-link.jsx';
import SelectorCollection     from '../selector-collection.jsx';
import SectionHeader          from '../section-header.jsx';
import Page                   from '../page.jsx';

const OPTIONS = ['Yes', 'No'];
let pageTitle = "DMV: License application - My History";

const Form = (props) => {
  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='2'
      sectionName='My history'
      {...props}
    >
      <div className='veterans-questionnaire-form'>
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
    </Page>
  );
};

export default Form;
