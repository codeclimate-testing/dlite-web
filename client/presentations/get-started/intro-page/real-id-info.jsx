'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getDL,
  getID
} from '../../../helpers/data/card-type';

const idRealID = translations.intro.getStartedPage.whatYouAreDoing.realIDCompliantID;
const dlRealID = translations.intro.getStartedPage.whatYouAreDoing.realIDCompliantLicense;

const RealIDInfo = (props) => {
  if(props.realID.getRealID !== 'Yes') { return null; }
  let realIdCompliant = '';

  if(props.realID.realIdDesignation === 'ID' || (getID(props) && !getDL(props))) {
    realIdCompliant = idRealID
  }
  if(props.realID.realIdDesignation === 'DL' || (getDL(props) && !getID(props))) {
    realIdCompliant = dlRealID
  }

  return (
    <div className='real-id-info'>
      <p>{realIdCompliant}</p>
    </div>
    );
};

export default RealIDInfo;

