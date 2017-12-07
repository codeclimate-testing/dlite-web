'use strict';

import React from 'react';

import SelectorCollection       from '../selector-collection.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../page.jsx';

const VALUES = ['Yes', 'No'];

let pageTitle = 'DMV: ID application - Reduced Fee';

const Form = (props) => {

  let onChange = (e) => {
    let answer = e;
    answer.target.value = {..., props.cardOptions.ID};
    console.log(props.cardOptions.ID)
    console.log(answer.target.value);
    props.onChange(answer);
  };

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
                  onChange={ onChange }
                  selectedValue={ props.cardOptions.ID.modifications.reducedFee }
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
