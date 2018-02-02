'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import { getCorrectString }   from '../../../helpers/data/get-started';
import { hasActionIsUpdating } from '../../../helpers/data/card-actions';

const licenseUpdate = translations.intro.getStartedPage.explanation.update.license;
const IDUpdate = translations.intro.getStartedPage.explanation.update.id;

const UpdateApplicationInfo = (props) => {
  if (!hasActionIsUpdating(props)) { return null; }
  let updateInfo = getCorrectString(props, licenseUpdate, IDUpdate);

  return (
    <div className='update-application-info'>
      <p>{updateInfo}</p>
    </div>
    );
};

export default UpdateApplicationInfo;
