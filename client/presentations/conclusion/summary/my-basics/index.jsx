'use strict';

import React                       from 'react';
import Accordion                   from '../../../../containers/accordion.jsx';
import LegalName                   from './legal-name.jsx';
import DateOfBirth                 from './date-of-birth.jsx';
import Address                     from './address.jsx';
import TraitsHeightWeight          from './traits-height-weight.jsx';
import PhysicalTraits              from './physical-traits.jsx';
import Empty                       from './empty.jsx';
import SocialSecurity              from './social-security.jsx';


const MyBasics = (props) => {
  const application = props.application;
  return (
    <Accordion id='basics-summary' title='My basics' key='basics-summary'>
      <Empty              {...application} />
      <LegalName
        legalName         = {application.basics.legalName}
        editKey           = 'legalName'
        summary           = 'summary'
      />
      <DateOfBirth
        dateOfBirth       = {application.basics.dateOfBirth}
        editKey           = 'dateOfBirth'
        summary           = 'summary'
      />
      <Address
        address           = {application.basics.address}
        summary           = 'summary'
      />
      <PhysicalTraits
        physicalTraits    = {application.basics.physicalTraits}
        summary           = 'summary'
      />
      <TraitsHeightWeight
        traitsHeightWeight= {application.basics.traitsHeightWeight}
        summary           = 'summary'
      />
      <SocialSecurity
        socialSecurity    = {application.basics.socialSecurity}
        summary           = 'summary'
      />
    </Accordion>
  );
};

export default MyBasics;