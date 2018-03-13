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
      />
      <LegalName
        locale            = { locale }
        legalName         = {application.basics.legalName}
        editKey           = 'legalName'
      />
      <DateOfBirth
        locale            = { locale }
        dateOfBirth       = {application.basics.dateOfBirth}
        editKey           = 'dateOfBirth'
      />
      <Address
        locale            = { locale }
        address           = { application.basics.address}
        editKey           = 'addresses'
      />
      <PhysicalTraits
        locale            = { locale }
        editKey           = 'sexEyeHair'
        physicalTraits    = { application.basics.physicalTraits}
      />
      <TraitsHeightWeight
        locale            = { locale }
        editKey           = 'heightWeight'
        traitsHeightWeight= { application.basics.traitsHeightWeight}
      />
      <SocialSecurity
        locale            = { locale }
        socialSecurity    = { application.basics.socialSecurity}
        editKey           = 'socialSecurity'
      />
    </Accordion>
  );
};

export default MyBasics;