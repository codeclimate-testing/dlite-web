'use strict';

import React from 'react';

import SelectorCollection       from '../selector-collection.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../page.jsx';

const VALUES = ['Yes', 'No'];

let pageTitle = 'DMV: ID application - Reduced Fee';

const Form = (props) => {

  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <div className='reduced-fee-form'>
        
        <h4>Are you applying for a reduced fee or free ID?</h4>

        {
          props.cardType.ID === true && props.cardType.DL === true &&
          <h5>This only applies to your ID Card. You cannot get a free or reduced fee driver license.</h5>
        }

        <form onSubmit={ props.onSubmit } >
          <div className='row inner-bottom'>
              <SelectorCollection
                  name='ID'
                  values={VALUES}
                  onChange={ props.onChange }
                  selectedValue={ props.reducedFee.ID }
              />

              <div className='unit spacer' />
          </div>

          {
            props.reducedFee.ID === 'Yes' &&
            <div>
              <h4>Do you have the right form?</h4>
              <h5>In order to get a reduced fee you need to have form 937. To get a free ID you need to have form 933.</h5>
              <SelectorCollection
                name='form'
                values={VALUES}
                onChange={ props.onChange }
                selectedValue={ props.reducedFee.form }
              />

              <h4>How do I get these forms?</h4>
              <h5>The DMV does not provide these forms. If you get assistance through the government or a non-profit, speak with them about getting a form.</h5>
            </div>
          }

          <NavigationButtons
            {...props}
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;