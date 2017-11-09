'use strict';

import React from 'react';

import StateSelector    from '../state-selector.jsx';
import TextInput        from '../text-input.jsx';
import AddressTemplate  from '../address-template.jsx';
import InterstitialAddress from './interstitial-address-form.jsx'

const Form = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='home-address-form'>
    <h3>1 &raquo; My Basics: Who You Are</h3>
    <hr></hr>


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
  )
};

export default Form;
