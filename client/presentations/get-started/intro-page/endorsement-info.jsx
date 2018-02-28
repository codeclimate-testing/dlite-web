'use strict';

import React        from 'react';
import translations from '../../../i18n';
import { getDL }    from '../../../helpers/data/card-type';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';
import {
  getEndorsementString
} from '../../../helpers/data/get-started';

const EndorsementInfo = (props) => {
  let locale = props.locale;
  const fireFighterEndorsement = convertToHtml('p', translations[locale] .intro.getStartedPage.whatYouAreDoing.firefighterEndorsement);

  if(!getDL(props)) { return null; }
  let endorsement = getEndorsementString(props, fireFighterEndorsement);

  return (
    <div className='endorsement-info'>
      {endorsement}
    </div>
    );
};

export default EndorsementInfo;

