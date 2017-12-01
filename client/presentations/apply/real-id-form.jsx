'use strict';

import React from 'react';

import HomeLink                 from '../home-link.jsx';
import SelectorCollection       from '../selector-collection.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../page.jsx';

const VALUES = ['Yes', 'No'];

let pageTitle = 'DMV: License application - My basics'

const Form = (props) => {
  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <div className='real-id-form'>
        <h4>Do you plan on using your {'{card type}'} to fly?</h4>
        <h5>As of October 1, 2020, you will need a federally compliant driver license or ID card to fly <b>within</b> the United States.</h5>

        <form onSubmit={ props.onSubmit } >
          <div className='row inner-bottom'>
              <SelectorCollection
                  name='getRealID'
                  values={VALUES}
                  onChange={ props.onChange }
                  selectedValue={ props.realID.getRealID }
              />

              <div className='unit spacer' />
          </div>

          <NavigationButtons
            {...props}
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
