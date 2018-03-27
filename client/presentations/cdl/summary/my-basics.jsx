'use strict';

import React                from 'react';
import DateOfBirth          from '../../conclusion/summary/my-basics/date-of-birth.jsx';
import LegalName            from '../../conclusion/summary/my-basics/legal-name.jsx';
import PhysicalTraits       from '../../conclusion/summary/my-basics/physical-traits.jsx';
import HeightWeight         from '../../conclusion/summary/my-basics/traits-height-weight.jsx';
import Address              from '../../conclusion/summary/my-basics/address.jsx';
import SocialSecurity       from '../../conclusion/summary/my-basics/social-security.jsx';
import Accordion            from '../../../containers/accordion.jsx';
import Translator           from '../../../i18n/translator-tag.jsx';


const MyBasics = (props) => {
  let cdl         = props.cdl;
  return (
    <Accordion
      id    = 'basics-summary'
      title = 'summaryPage.myBasics.title'
      key   = 'basics-summary'
    >
      <LegalName
        legalName         = {cdl.basics.legalName}
        editKey           = 'cdlLegalName'
      />
      <DateOfBirth
        dateOfBirth       = {cdl.basics.dateOfBirth}
        editKey           = 'cdlDateOfBirth'
      />
      <PhysicalTraits
        physicalTraits    = { cdl.basics.physicalTraits}
        editKey           = 'cdlSexEyeHair'
      />
      <HeightWeight
        traitsHeightWeight= { cdl.basics.traitsHeightWeight}
        editKey           = 'cdlHeightWeight'
      />
      <Address
        address           = {cdl.basics.address}
        editKey           = 'cdlResidency'
      />
      <SocialSecurity
        socialSecurity    = {cdl.basics.socialSecurity}
        editKey           = 'cdlSocialSecurity'
      />
    </Accordion>
  )
};

export default MyBasics;
