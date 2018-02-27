'use strict';

import React                from 'react';
import DateOfBirth          from '../../conclusion/summary/my-basics/date-of-birth.jsx';
import LegalName            from '../../conclusion/summary/my-basics/legal-name.jsx';
import Address              from '../../conclusion/summary/my-basics/address.jsx';
import Accordion            from '../../../containers/accordion.jsx';


const MyBasics = (props) => {
  let locale = props.locale;
  return (
    <Accordion id='basics-summary' title='My basics'>
      <LegalName
        legalName         = {props.basics.legalName}
        editKey           = 'cdlLegalName'
        summary           = 'cdlSummary'
        locale            = {locale}
      />
      <DateOfBirth
        dateOfBirth       = {props.basics.dateOfBirth}
        editKey           = 'cdlDateOfBirth'
        summary           = 'cdlSummary'
        locale            = {locale}
      />
      <Address
        address           = {props.basics.residency}
        editKey           = 'cdlResidency'
        summary           = 'cdlSummary'
      />
    </Accordion>
  )
};

export default MyBasics;