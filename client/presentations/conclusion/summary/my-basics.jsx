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
  return (
    <Accordion id='basics-summary' title='My basics' key='basics-summary'>
      <Empty              {...props} />
      <LegalName
        legalName         = {props.basics.legalName}
        editKey           = 'legalName'
      />
      <DateOfBirth
        dateOfBirth       = {props.basics.dateOfBirth}
        editKey           = 'dateOfBirth'
      />
      <Address
        address           = {props.basics.address}
        editKey           = 'addresses'
        summary           = 'summary'
        locale            = { locale }
      />
      <PhysicalTraits
        physicalTraits    = {props.basics.physicalTraits}
      />
      <TraitsHeightWeight
        traitsHeightWeight= {props.basics.traitsHeightWeight}
      />
      <SocialSecurity
        socialSecurity    = {props.basics.socialSecurity}
      />
    </Accordion>
  );
};

export default MyBasics;