'use strict';

import React                from 'react';
import DateOfBirth          from '../../conclusion/summary/my-basics/date-of-birth.jsx';
import LegalName            from '../../conclusion/summary/my-basics/legal-name.jsx';
import Accordion            from '../../../containers/accordion.jsx';


const MyBasics = (application) => {
  let locale = application.locale;
  return (
    <Accordion id='basics-summary' title='My basics'>
      <LegalName
        legalName         = {application.basics.legalName}
        editKey           = 'cdlLegalName'
        summary           = 'cdlSummary'
        locale            = {locale}
      />
      <DateOfBirth
        dateOfBirth       = {application.basics.dateOfBirth}
        editKey           = 'cdlDateOfBirth'
        summary           = 'cdlSummary'
        locale            = {locale}
      />
    </Accordion>
  )
};

export default MyBasics;