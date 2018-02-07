'use strict';

import React              from 'react';
import TextArea           from '../../text-area.jsx';
import translations       from '../../../i18n'
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const EnterPreviousNames = (props) => {
  if (!props.showIf) { return null; }
  return (
    <div className='enter-previous-names'>
      <hr />
      {convertToHtml('h2', translations.myHistory.nameHistoryPage.explanationPrompt, 'question')}
      {convertToHtml('p', translations.myHistory.nameHistoryPage.helpText)}

      <fieldset>
        <TextArea
          {...props}
          identifier='previousNames'
          description='Previous Names:'
          value      = { props.namesHistory.previousNames }
        />
      </fieldset>
    </div>
  );
};

export default EnterPreviousNames;

