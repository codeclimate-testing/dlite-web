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
  let application = props.application;
  let locale      = props.ui.locale;

  return (
    <Accordion id='basics-summary' title='My basics' key='basics-summary'>
      <Empty
        {...application}
        locale            = { locale }
        summary           = 'summary'
      />
      <LegalName
        locale            = { locale }
        summary           = 'summary'
        legalName         = {application.basics.legalName}
        editKey           = 'legalName'
      />
      <DateOfBirth
        locale            = { locale }
        summary           = 'summary'
        dateOfBirth       = {application.basics.dateOfBirth}
        editKey           = 'dateOfBirth'
      />
      <Address
        locale            = { locale }
        summary           = 'summary'
        address           = { application.basics.address}
        editKey           = 'addresses'
      />
      <PhysicalTraits
        locale            = { locale }
        summary           = 'summary'
        physicalTraits    = { application.basics.physicalTraits}
      />
      <TraitsHeightWeight
        locale            = { locale }
        summary           = 'summary'
        traitsHeightWeight= { application.basics.traitsHeightWeight}
      />
      <SocialSecurity
        locale            = { locale }
        summary           = 'summary'
        socialSecurity    = { application.basics.socialSecurity}
        editKey           = 'socialSecurity'
      />
    </Accordion>
  );
};

export default MyBasics;