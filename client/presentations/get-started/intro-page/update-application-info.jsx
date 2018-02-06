'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import { getCorrectString }   from '../../../helpers/data/card-type';
import { hasActionIsUpdating } from '../../../helpers/data/card-actions';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const licenseUpdate = convertToHtml('p', translations.intro.getStartedPage.explanation.update.license);
const IDUpdate = convertToHtml('p', translations.intro.getStartedPage.explanation.update.id);

const UpdateApplicationInfo = (props) => {
  if (!hasActionIsUpdating(props)) { return null; }
  let updateInfo = getCorrectString(props, licenseUpdate, IDUpdate);

  return (
    <div className='update-application-info'>
      {updateInfo}
    </div>
    );
};

export default UpdateApplicationInfo;
