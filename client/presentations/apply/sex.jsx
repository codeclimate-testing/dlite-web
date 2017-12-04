'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import Page                    from '../../presentations/page.jsx';

const VALUES = ['Female', 'Male'];
let pageTitle = "DMV: License application - My basics";

const Sex = (props) => {
  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <div className="sex">
        <h4>What's your sex?</h4>
          <div className='inner-bottom'>
            <SelectorCollection
              name='sex'
              values={VALUES}
              onChange={ props.onChange }
              selectedValue={ props.selectedValue }
            />
          </div>
      </div>
    </Page>
  );
};

export default Sex;
