'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import { getCorrectString }   from '../../../helpers/data/get-started';
import { isReplacingCard }    from '../../../helpers/data/card-actions';

const licenseReplace = translations.intro.getStartedPage.explanation.replace.license;
const IDReplace = translations.intro.getStartedPage.explanation.replace.id;

const ReplaceApplicationInfo = (props) => {
  if (!isReplacingCard(props)) { return null; }
  let replaceInfo = getCorrectString(props, licenseReplace, IDReplace);

  return (
    <div className='replace-application-info'>
      <p>{replaceInfo}</p>
    </div>
    );
};

export default ReplaceApplicationInfo;

