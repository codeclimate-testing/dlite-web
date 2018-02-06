'use strict';

import React                  from 'react';
import translations           from '../../../i18n';
import { getCorrectString }   from '../../../helpers/data/card-type';
import { isReplacingCard }    from '../../../helpers/data/card-actions';
import { convertToHtml }      from '../../../i18n/convert-to-html.jsx';

const licenseReplace = convertToHtml('p', translations.intro.getStartedPage.explanation.replace.license);
const IDReplace = convertToHtml('p', translations.intro.getStartedPage.explanation.replace.id);

const ReplaceApplicationInfo = (props) => {
  if (!isReplacingCard(props)) { return null; }
  let replaceInfo = getCorrectString(props, licenseReplace, IDReplace);

  return (
    <div className='replace-application-info'>
      {replaceInfo}
    </div>
    );
};

export default ReplaceApplicationInfo;

