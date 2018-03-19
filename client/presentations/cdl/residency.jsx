'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import ResidencyRadios          from './residency/resident-form.jsx';
import AddressForm              from './residency/address.jsx';
import ResidencyMessageNo       from './residency/no-message.jsx';
import { notResident }          from '../../helpers/data/cdl';
import translations           from '../../i18n';
import Translation            from '../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit = {props.onSubmit} className='cdl-residency'  >
        <Translation tag='h2' className='question'>
          {translations[locale].cdl.californiaResidentPage.prompt}
        </Translation>
        <ResidencyRadios
          {...props}
          selectedValue = { props.residency.isResident }
          errorMessage  = { props.validations.isResident() }
        />
        <ResidencyMessageNo
          residency     = {props.residency}
        />
        <AddressForm    {...props} />
        <NavigationButtons
          {...props}
          errorMessage   = { props.validations.all() }
          continueHidden = { notResident(props.residency) }
      />
      </form>
    </Page>
  )
};

export default Form;
