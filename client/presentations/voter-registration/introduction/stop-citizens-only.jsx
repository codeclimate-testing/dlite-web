'use strict';

import React from 'react';
import Translate from '../../../i18n/translate-tag.jsx';
import translations from '../../../i18n';

const StopCitizensOnly = (props) => {
  let locale = props.locale;
  return (
    <div className='row citizens-only'>
      <img
        src='/images/stop.png'
        alt='Stop'
        className='unit'
      />
      <Translate tag='h5' className='unit'>
        { translations[locale].votingRegistration.introductionPage.citizenOnlyDisclaimer }
      </Translate>
      <hr className='last-unit mid-line' />
    </div>
  );
};

export default StopCitizensOnly;
