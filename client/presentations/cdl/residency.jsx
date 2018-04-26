'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import ResidencyRadios          from './residency/resident-form.jsx';
import AddressForm              from './residency/address.jsx';
import ResidencyMessageNo       from './residency/no-message.jsx';
import { notResident }          from '../../helpers/data/cdl';
import Translator               from '../../i18n/translator-tag.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit = {props.onSubmit} className='cdl-residency'  >
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'cdl.californiaResidentPage.prompt'
          tabIndex        = '0'
        />
        <ResidencyRadios
          {...props}
          selectedValue = { props.address.isResident }
          errorMessage  = { props.validations.isResident() }
        />
        <ResidencyMessageNo
          residency     = {props.address}
        />
        <AddressForm    {...props} />
        <NavigationButtons
          {...props}
          errorMessage   = { props.validations.all() }
          continueHidden = { notResident(props.address) }
      />
      </form>
    </Page>
  )
};

export default Form;
