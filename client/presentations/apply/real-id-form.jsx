'use strict';

import React from 'react';

import SelectorCollection from '../selector-collection.jsx';
import NavigationButtons from '../navigation-buttons.jsx';
import Page from '../page.jsx';

const VALUES = ['Yes', 'No'];

let pageTitle = 'DMV: License application - My basics'

const Form = (props) => {
  let card = props.cardType.DL ? 'Driver License' : 'ID';
  const oneCardHeader = <h4>Do you plan on using your {card} to fly?</h4>
  const twoCardHeader = <h4>Do you plan on using one of your cards to fly?</h4>
  let realIdHeader = '';

  if (props.cardType.DL && props.cardType.ID) {
    realIdHeader = twoCardHeader
  } else {
    realIdHeader = oneCardHeader
  }

  return (
    <Page
      pageTitle={pageTitle}
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <div className='real-id-form'>
        {realIdHeader}

        <h5>As of October 1, 2020, you will need a federally compliant driver license or ID card to fly <b>within</b> the United States.</h5>

        <div className='row inner-bottom'>
          <SelectorCollection
            name='getRealID'
            values={VALUES}
            onChange={props.onChange}
            selectedValue={props.selectedValue}
          />

          <div className='unit spacer' />
        </div>
      </div>
    </Page>
  )
};

export default Form;
