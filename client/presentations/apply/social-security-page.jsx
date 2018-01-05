'use strict';
import React                from 'react';
import Page                 from '../../containers/page.jsx';
import SocialSecurityOption from './social-security/social-security-option-form.jsx';
import SocialSecurityEnter  from './social-security/social-security-enter-form.jsx';
import SocialSecurityNoInfo from './social-security/social-security-no-info.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';

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
        />

        <SocialSecurityEnter {...props} />

        <SocialSecurityNoInfo 
          socialSecurity = { props.socialSecurity }
        />

        <NavigationButtons {...props} />

      </form>
    </Page>
  )
};

export default SocialPage;