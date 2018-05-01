'use strict';

import React        from 'react';
import Translator   from '../../../i18n/translator-tag.jsx';

const StopCitizensOnly = (props) => {
  return (
    <div className='row citizens-only'>
      <img
        src='/images/stop.png'
        alt='Stop'
        className='unit'
      />
      <Translator
        tag               = 'h5'
        className         = 'unit'
        translationPath   = 'votingRegistration.introductionPage.citizenOnlyDisclaimer'
        tabIndex          = '0'
      />
      <hr className='last-unit mid-line' />
    </div>
  );
};

export default StopCitizensOnly;
