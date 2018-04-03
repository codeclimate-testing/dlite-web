'use strict';

import React                 from 'react';
import { showBulletPoint }   from '../../../helpers/data/veteran';
import Translator            from '../../../i18n/translator-tag.jsx';

const veteranVerificationLink = 'https://www.dmv.ca.gov/portal/dmv/detail/coi/veterans/veterans_driver_license';

const VeteransDocuments = (props) => {
  if (!showBulletPoint(props)) { return null; }

  return (
    <div key='proof-of-veterans-service'>
      <Translator
        tag             = 'h4'
        className       = 'proof-of-veterans-service'
        translationPath = 'newExtracted.conclusion.documents.veteran.title'
      />
      <Translator
        tag             = 'p'
        translationPath = 'newExtracted.conclusion.documents.veteran.explanation'
      />
    </div>
    );
};

export default VeteransDocuments;
