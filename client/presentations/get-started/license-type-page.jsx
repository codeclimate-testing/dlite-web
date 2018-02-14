'use strict';

import React from 'react';

import LicenseTypeForm        from './license-type/typeCheckboxes.jsx';
import EndorsementToggle      from './license-type/endorseToggle.jsx';
import EndorsementForm        from './license-type/endorseForm.jsx';
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

        <EndorsementForm
          {...props}
          showIf    = { needsEndorsement(props) }
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
