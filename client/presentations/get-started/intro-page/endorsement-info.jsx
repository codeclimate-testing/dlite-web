'use strict';

import React        from 'react';
import translations from '../../../i18n';
import { getDL }    from '../../../helpers/data/card-type';
import Translation  from '../../../i18n/translate-tag.jsx';
import {
  getEndorsementString
} from '../../../helpers/data/get-started';

const EndorsementInfo = (props) => {
  let locale = props.locale;
  const fireFighterEndorsement = 
        <Translation tag='p'>
            {translations[locale] .intro.getStartedPage.whatYouAreDoing.firefighterEndorsement}
        </Translation>
  if(!getDL(props)) { return null; }
  let endorsement = getEndorsementString(props, fireFighterEndorsement);

  return (
    <div className='endorsement-info'>
      {endorsement}
    </div>
    );
};

export default EndorsementInfo;

