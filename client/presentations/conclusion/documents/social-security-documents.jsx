'use strict';

import React                    from 'react';
import { hasSocialSecurityYes } from '../../../helpers/data/ssn';
import Translator               from '../../../i18n/translator-tag.jsx';


const socialSecurityDocumentsList = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl08';

const SocialSecurityDocuments = (props) => {
  if (!hasSocialSecurityYes(props)) { return null; }

  return (
    <div key='proof-of-ssn-documents'>
      <Translator
        tag             = 'h4'
        className       = 'proof-of-ssn-documents'
        translationPath = 'newExtracted.conclusion.documents.socialSecurity.title'
      />
      <Translator
        tag             = 'p'
        translationPath = 'newExtracted.conclusion.documents.socialSecurity.explanation'
      />
    </div>
  );
};

export default SocialSecurityDocuments;
