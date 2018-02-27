'use strict';

import React                       from 'react';
import Accordion                   from '../../../containers/accordion.jsx';
import {
  Empty,
  LegalName,
  DateOfBirth,
  Address,
  TraitsHeightWeight,
  PhysicalTraits,
  SocialSecurity
} from './my-basics/index';

const MyBasics = (props) => {
  const application = props.application;
  let locale        = props.ui.locale;
  return (
    <Accordion id='basics-summary' title='My basics' key='basics-summary'>
      <Empty              {...application} />
      <LegalName
        legalName         = {application.basics.legalName}
        editKey           = 'legalName'
        summary           = 'summary'
        locale            = { locale }
      />
      <DateOfBirth
        dateOfBirth       = {application.basics.dateOfBirth}
        editKey           = 'dateOfBirth'
        summary           = 'summary'
        locale            = { locale }
      />
      <Address
        address           = {application.basics.address}
        editKey           = 'addresses'
        summary           = 'summary'
        locale            = { locale }
      />
      <PhysicalTraits
        physicalTraits    = {application.basics.physicalTraits}
        summary           = 'summary'
        locale            = { locale }
      />
      <TraitsHeightWeight
        traitsHeightWeight= {application.basics.traitsHeightWeight}
        summary           = 'summary'
        locale            = { locale }
      />
      <SocialSecurity
        socialSecurity    = {application.basics.socialSecurity}
        summary           = 'summary'
        locale            = { locale }
      />
    </Accordion>
  );
};

export default MyBasics;