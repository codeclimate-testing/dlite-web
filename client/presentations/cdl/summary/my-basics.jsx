'use strict';

import React                from 'react';
import DateOfBirth          from '../../conclusion/summary/my-basics/date-of-birth.jsx';
import LegalName            from '../../conclusion/summary/my-basics/legal-name.jsx';
import Address              from '../../conclusion/summary/my-basics/address.jsx';
import SocialSecurity       from '../../conclusion/summary/my-basics/social-security.jsx';
import Accordion            from '../../../containers/accordion.jsx';


const MyBasics = (props) => {
  let cdl         = props.cdl;
  let locale      = props.ui.locale;
  return (
    <Accordion id='basics-summary' title='My basics'>
      <LegalName
        legalName         = {cdl.basics.legalName}
        editKey           = 'cdlLegalName'
        summary           = 'cdlSummary'
        locale            = {locale}
      />
      <DateOfBirth
        dateOfBirth       = {cdl.basics.dateOfBirth}
        editKey           = 'cdlDateOfBirth'
        summary           = 'cdlSummary'
        locale            = {locale}
      />
      <Address
        address           = {cdl.basics.residency}
        editKey           = 'cdlResidency'
        summary           = 'cdlSummary'
        locale            = {locale}
      />
      <SocialSecurity
        socialSecurity    = {cdl.basics.socialSecurity}
        editKey           = 'cdlSocialSecurity'
        summary           = 'cdlSummary'
        locale            = {locale}
      /> 
    </Accordion>
  )
};

export default MyBasics;