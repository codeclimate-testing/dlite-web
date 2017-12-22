'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';

import HomeAddress          from './address/home-address-form.jsx';
import InterstitialAddress  from './address/interstitial-address-form.jsx';
import MailingAddress       from './address/mailing-address-form.jsx';

const AddressPage = (props) => {

  // TODO: refactor how the reducers get called so that the mailingAddress is set outside of the view
  if(props.homeAddress.homeAddressSameAsMailing === 'Yes') {
    for(var item in props.homeAddress) {
      if(props.homeAddress.hasOwnProperty(item)) {
        props.mailingAddress[item] = props.homeAddress[item];
      }
    }
  };
  
  return (
    <Page 
      {...props}
      sectionKey='myBasics'
    >
      <form onSubmit={props.onSubmit} className='address-form'>
        <HomeAddress {...props} 
          onChange = { props.onHomeChange }
        />
        <InterstitialAddress {...props} 
          onChange = { props.onHomeChange }
          selectedValue = { props.homeAddress.homeAddressSameAsMailing }
        />
        <MailingAddress {...props} 
          onChange = { props.onMailingChange }
        />
        <NavigationButtons {...props} />
      </form>
    </Page>
  )
};

export default AddressPage;