'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import LicenseClassForm         from './license-class/class-radios.jsx';
import WhatDoINeedFAQ           from './license-class/what-do-i-need-faq.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';


const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={props.onSubmit}>
        <LicenseClassForm
          {...props}
          errorMessage  = { props.validations.select() }
          selectedValue = { props.licenseClass}
        />

        <WhatDoINeedFAQ 
          {...props}
        />

        <NavigationButtons
          {...props}
          errorMessage={props.validations.all()}
        />
      </form>
    </Page>
  )
};

export default Form;
