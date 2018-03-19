'use strict';

import React        from 'react';
import Translator   from '../../../i18n/translator-tag.jsx';

const StopCitizensOnly = (props) => {
  let locale = props.locale;
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
      />
      <hr className='last-unit mid-line' />
    </div>
  );
};

export default StopCitizensOnly;
