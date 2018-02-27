'use strict';

import React from 'react';

import LicenseTypeForm        from './license-type/type-checkboxes.jsx';
import EndorsementToggle      from './license-type/endorse-toggle.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../../containers/page.jsx';
import { needsEndorsement }   from '../../helpers/data/card-type';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={props.onSubmit}>
        <LicenseTypeForm
          {...props}
        />

        <EndorsementToggle
          {...props}
          selectedValue={ props.DLApp.licenseType.needEndorsement }
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
