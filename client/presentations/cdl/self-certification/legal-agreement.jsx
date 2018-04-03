'use strict';

import React        from 'react';
import Translator   from '../../../i18n/translator-tag.jsx';

const LegalAgreement = (props) => {
  return (
    <div className='legal-agreement'>
      <hr/>
        <Translator
          tag             = 'h3'
          translationPath = 'newApproved.cdl.selfCertification.legalAgreement.title'
        />
        <Translator
          tag             = 'p'
          translationPath = 'newApproved.cdl.selfCertification.legalAgreement.agreement'
        />
    </div>
  )
};

export default LegalAgreement;
