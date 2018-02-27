'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import ResidencyRadios          from './residency/resident-form.jsx';
import AddressForm              from './residency/address.jsx';
import ResidencyMessageNo       from './residency/no-message.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form className='cdl-residency' onSubmit = {props.onSubmit} >
        <h2 className='question'>Are you a resident of California?</h2>
        <ResidencyRadios
          {...props}
          selectedValue = {props.residency.isResident}
        />
        <ResidencyMessageNo
          residency     = {props.residency}
        />
        <AddressForm
          {...props}
        />

      </form>
      <NavigationButtons
        {...props}
        errorMessage= { props.validations.all() }
      />
    </Page>
  )
};

export default Form;