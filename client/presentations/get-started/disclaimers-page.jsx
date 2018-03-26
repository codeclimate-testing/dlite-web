'use strict'

import React from 'react';

import DisclaimersInfo        from './disclaimers-info-page.jsx';
import DisclaimersCheckbox    from './disclaimers-checkbox-page.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../../containers/page.jsx';

const Form = (props) => {
  return(
    <Page
      {...props}
      pageTitle='Disclaimers'
    >
      <form onSubmit={props.onSubmit} className='disclaimers-form'>

        <DisclaimersInfo
          {...props}
        />

        <DisclaimersCheckbox
          {...props}
        />

        <NavigationButtons
          {...props}
          errorMessage={ props.validations.all() }
        />

      </form>
    </Page>
  );
}

export default Form;