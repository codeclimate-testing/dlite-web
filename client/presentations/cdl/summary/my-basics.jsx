'use strict';

import React                from 'react';
import DateOfBirth          from '../../conclusion/summary/my-basics/date-of-birth.jsx';
import LegalName            from '../../conclusion/summary/my-basics/legal-name.jsx';
import PhysicalTraits       from '../../conclusion/summary/my-basics/physical-traits.jsx';
import HeightWeight         from '../../conclusion/summary/my-basics/traits-height-weight.jsx';
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
        locale            = {locale}
      />
      <DateOfBirth
        dateOfBirth       = {cdl.basics.dateOfBirth}
        editKey           = 'cdlDateOfBirth'
        locale            = {locale}
      />
      <PhysicalTraits
        physicalTraits    = { cdl.basics.physicalTraits}
        editKey           = 'cdlSexEyeHair'
        locale            = { locale }
      />
      <HeightWeight
        traitsHeightWeight= { cdl.basics.traitsHeightWeight}
        editKey           = 'cdlHeightWeight'
        locale            = { locale }
      />
      <Address
        address           = {cdl.basics.residency}
        editKey           = 'cdlResidency'
        locale            = {locale}
      />
      <SocialSecurity
        socialSecurity    = {cdl.basics.socialSecurity}
        editKey           = 'cdlSocialSecurity'
        locale            = {locale}
      />
    </Accordion>
  )
};

export default MyBasics;