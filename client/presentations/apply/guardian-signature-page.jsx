'use strict'

import React from 'react';

import SignatureChoice        from './guardian-signature/guardian-signature-choice.jsx';
import GuardianDetails        from './guardian-signature/guardian-details.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../../containers/page.jsx';

const Form = (props) => {
  return(
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit={props.onSubmit} className='guardian-signature-form'>

        <SignatureChoice
          {...props}
          selectedValue={props.guardianSignature.isSigned}
        />

        <GuardianDetails {...props} />

        <NavigationButtons {...props} />

      </form>
    </Page>
  );
}

export default Form;