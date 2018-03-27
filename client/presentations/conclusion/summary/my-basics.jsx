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
import Translator                 from '../../../i18n/translator-tag.jsx';

const MyBasics = (props) => {
  let application = props.application;

  return (
    <Accordion
      id    = 'basics-summary'
      title = 'summaryPage.myBasics.title'
      key   = 'basics-summary'
    >
      <Empty
        {...application}
      />
      <LegalName
        legalName         = {application.basics.legalName}
        editKey           = 'legalName'
      />
      <DateOfBirth
        dateOfBirth       = {application.basics.dateOfBirth}
        editKey           = 'dateOfBirth'
      />
      <Address
        address           = { application.basics.address}
        editKey           = 'addresses'
      />
      <PhysicalTraits
        editKey           = 'sexEyeHair'
        physicalTraits    = { application.basics.physicalTraits}
      />
      <TraitsHeightWeight
        editKey           = 'heightWeight'
        traitsHeightWeight= { application.basics.traitsHeightWeight}
      />
      <SocialSecurity
        socialSecurity    = { application.basics.socialSecurity}
        editKey           = 'socialSecurity'
      />
    </Accordion>
  );
};

export default MyBasics;
