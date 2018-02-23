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