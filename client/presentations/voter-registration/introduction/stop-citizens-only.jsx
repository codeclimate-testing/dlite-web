'use strict';

import React from 'react';
import Translate from '../../../i18n/translate-tag.jsx';
import translations from '../../../i18n';

const StopCitizensOnly = (props) => {
  return (
    <div className='row'>
      <img
        src='/images/stop.png'
        alt='Stop'
        className='unit'
      />
      <Translate tag='h5' className='unit citizens-only-text'>
        { translations.votingRegistration.introductionPage.citizenOnlyDisclaimer }
      </Translate>
    </div>
  );
};

export default StopCitizensOnly;
