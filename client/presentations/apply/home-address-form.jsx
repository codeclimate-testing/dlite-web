'use strict';

import React from 'react';

import StateSelector    from '../state-selector.jsx';
import TextInput        from '../text-input.jsx';
import Page               from '../page.jsx';
import AddressTemplate  from '../address-template.jsx';
import InterstitialAddress from './interstitial-address-form.jsx'

const Form = (props) => {
  return (
    <Page
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <div className='home-address-form'>
        <h4>Where do you live?</h4>
        <h5>For example: 1234 H Street, Apt. 200, Los Angeles, CA. 90017</h5>
        <div className='addresses-section'>
          <AddressTemplate
            type='home'
            address={ props.homeAddress }
            onChange={ props.onChange }
          />
          <InterstitialAddress
            onChange={props.onChange}
            selectedValue={props.homeAddress.homeAddressSameAsMailing}
          />
        </div>
      </div>
    </Page>
  );
};

export default Form;
