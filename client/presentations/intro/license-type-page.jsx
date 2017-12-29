'use strict';

import React from 'react';

import LicenseTypeForm        from './license-type/typeCheckboxes.jsx';
import EndorsementToggle      from './license-type/endorseToggle.jsx';
import EndorsementForm        from './license-type/endorseForm.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../../containers/page.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={props.onSubmit}>

        <LicenseTypeForm {...props} />

        <EndorsementToggle {...props} />

        <EndorsementForm {...props} />
     
        <NavigationButtons
          continueDisabled  = { props.continueDisabled }
          onBack            = { props.onBack }
        />
      </form>
    </Page>
  )
};

export default Form;