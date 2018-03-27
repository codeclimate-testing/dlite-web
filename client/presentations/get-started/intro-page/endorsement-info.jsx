'use strict';

import React        from 'react';
import { getDL }    from '../../../helpers/data/card-type';
import Translator   from '../../../i18n/translator-tag.jsx';
import {
  getEndorsementString
} from '../../../helpers/data/get-started';

const EndorsementInfo = (props) => {

  const fireFighterEndorsementKey =  'intro.getStartedPage.whatYouAreDoing.firefighterEndorsement';

  if(!getDL(props)) { return null; }
  let endorsement = getEndorsementString(props, fireFighterEndorsementKey);

  return (
    <div className='endorsement-info'>
      <Translator tag = 'p' translationPath = { endorsement } />
    </div>
    );
};

export default EndorsementInfo;

