'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getDL,
  getID
} from '../../../helpers/data/card-type';

const licenseReplace = translations.intro.getStartedPage.explanation.replace.license;
const IDReplace = translations.intro.getStartedPage.explanation.replace.id;

const ReplaceApplicationInfo = (props) => {
  if(props.cardType.cardAction !== 'replace') { return null; }
  let replaceInfo = '';

  if(getDL(props)) {
    replaceInfo = licenseReplace;
  }

  if(getID(props)) {
    replaceInfo = IDReplace;
  }

  return (
    <div className='replace-application-info'>
      <p>{replaceInfo}</p>
    </div>
    );
};

export default ReplaceApplicationInfo;

