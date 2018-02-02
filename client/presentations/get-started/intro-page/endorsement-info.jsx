'use strict';

import React        from 'react';
import translations from '../../../i18n';
import { getDL }    from '../../../helpers/data/card-type';
import {
  getEndorsementString
} from '../../../helpers/data/get-started';

const fireFighterEndorsement = translations.intro.getStartedPage.whatYouAreDoing.firefighterEndorsement;

const EndorsementInfo = (props) => {
  if(!getDL(props)) { return null; }
  let endorsement = getEndorsementString(props, fireFighterEndorsement);

  return (
    <div className='endorsement-info'>
      <p>{endorsement}</p>
    </div>
    );
};

export default EndorsementInfo;

