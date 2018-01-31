'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getDL
} from '../../../helpers/data/card-type';

const fireFighterEndorsement = translations.intro.getStartedPage.whatYouAreDoing.firefighterEndorsement;

const EndorsementInfo = (props) => {
  if(!getDL(props)) { return null; }
  let endorsement = '';

  if(props.licenseType.endorsement.indexOf('firefighter') > -1) {
    endorsement = fireFighterEndorsement
  }

  return (
    <div className='endorsement-info'>
      <p>{endorsement}</p>
    </div>
    );
};

export default EndorsementInfo;

