'use strict';

import React                  from 'react';
import translations from '../../../i18n';
import {
  getDL,
  getID
} from '../../../helpers/data/card-type';

const licenseUpdate = translations.intro.getStartedPage.explanation.update.license;
const IDUpdate = translations.intro.getStartedPage.explanation.update.id;

const UpdateApplicationInfo = (props) => {
  if(props.cardType.cardAction !== 'change') { return null; }
  if(props.cardChanges.correctOrUpdate !== 'update') { return null; }
  let updateInfo = '';

  if(getDL(props)) {
    updateInfo = licenseUpdate;
  }

  if(getID(props)) {
    updateInfo = IDUpdate;
  }

  return (
    <div className='update-application-info'>
      <p>{updateInfo}</p>
    </div>
    );
};

export default UpdateApplicationInfo;
