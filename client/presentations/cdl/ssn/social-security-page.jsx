'use strict';

import React                from 'react';

import Page                 from '../../../containers/page.jsx';
import SocialSecurityOption from '../../my-basics/social-security/social-security-option-form.jsx';
import SocialSecurityEnter  from '../../cdl/ssn/social-security-enter-form.jsx';
import SocialSecurityNoInfo from '../../cdl/ssn/social-security-no-info.jsx';
import NavigationButtons    from '../../navigation-buttons.jsx';
import { noSSN }            from '../../../helpers/data/cdl';

const SocialPage = (props) => {

  return (
    <Page
      {...props}
      sectionKey='myBasics'
    >
      <form onSubmit={ props.onSubmit } className='social-security-form'>
        <SocialSecurityOption
          {...props}
          selectedValue = { props.socialSecurity.hasSocialSecurity }
          errorMessage = {props.validations.hasSocialSecurity()}
        />

        <SocialSecurityEnter
        {...props}
        />

        <SocialSecurityNoInfo
          socialSecurity = { props.socialSecurity }
        />

       <NavigationButtons
          {...props}
          errorMessage   = { props.validations.all() }
          continueHidden = { noSSN(props.socialSecurity) }
      />
      </form>
    </Page>
  )
};

export default SocialPage;