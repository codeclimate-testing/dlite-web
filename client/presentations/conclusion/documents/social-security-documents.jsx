'use strict';

import React                    from 'react';
import { hasSocialSecurityYes } from '../../../helpers/data/ssn';


const socialSecurityDocumentsList = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl08';

const SocialSecurityDocuments = (props) => {
  if (!hasSocialSecurityYes(props)) { return null; }

  return (
    <div key='proof-of-ssn-documents'>
      <h4 className="proof-of-ssn-documents">Proof of Social Security Number</h4>
      <p>Under California law, we will need proof of your Social Security Number. Our <a target="_blank" href={ socialSecurityDocumentsList }>Social Security documents page lists accepted documents</a>.</p>
      <p>If you recently changed your name, make sure that change is reflected on the document you bring.</p>
    </div>
  );
};

export default SocialSecurityDocuments;
