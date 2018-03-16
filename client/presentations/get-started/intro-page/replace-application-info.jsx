'use strict';

import React                  from 'react';
import { getCorrectString }   from '../../../helpers/data/card-type';
import { isReplacingCard }    from '../../../helpers/data/card-actions';
import translations           from '../../../i18n';
import Translation            from '../../../i18n/translate-tag.jsx';

const ReplaceApplicationInfo = (props) => {
  let locale = props.locale;
  const licenseReplace = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.explanation.replace.license}
        </Translation>
    
  const IDReplace = 
        <Translation tag='p'>
          {translations[locale].intro.getStartedPage.explanation.replace.id}
        </Translation>

  if (!isReplacingCard(props)) { return null; }
  let replaceInfo = getCorrectString(props, licenseReplace, IDReplace);

  return (
    <div className='replace-application-info'>
      {replaceInfo}
    </div>
    );
};

export default ReplaceApplicationInfo;
