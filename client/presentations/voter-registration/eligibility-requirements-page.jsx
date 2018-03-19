'use strict';

import React                from 'react';
import FAQ                  from './eligibility/faq.jsx';
import IntroContent         from './eligibility/intro-content.jsx';
import Selectors            from './eligibility/selectors.jsx';
import Page                 from '../../containers/page.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import { checkPreReg }      from '../../helpers/data/youth';

const EligibilityRequirements = (props) => {
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <IntroContent {...props} dateOfBirth={props.dateOfBirth} />

      <form onSubmit={props.onSubmit} className='eligibility-requirements-form'>
        <Selectors {...props} />
        <FAQ {...props} dateOfBirth={props.dateOfBirth} />
        <NavigationButtons {...props} />
      </form>
    </Page>
  );
};

export default EligibilityRequirements;
