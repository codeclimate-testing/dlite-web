'use strict';

import React                  from 'react';
import { getCorrectString }   from '../../../helpers/data/card-type';
import { isReplacingCard }    from '../../../helpers/data/card-actions';
import Translator             from '../../../i18n/translator-tag.jsx';

const ReplaceApplicationInfo = (props) => {

  const licenseReplace  = 'intro.getStartedPage.explanation.replace.license';
  const IDReplace       = 'intro.getStartedPage.explanation.replace.id';

  if (!isReplacingCard(props)) { return null; }
  let replaceInfo = getCorrectString(props, licenseReplace, IDReplace);

  return (
    <div className='replace-application-info'>
      <Translator tag = 'p' translationPath = { replaceInfo } />
    </div>
    );
};

export default ReplaceApplicationInfo;
