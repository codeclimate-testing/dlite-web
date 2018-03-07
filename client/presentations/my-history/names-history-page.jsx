'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';
import UsedPreviousNames    from './names-history/used-previous-names.jsx';
import EnterPreviousNames   from './names-history/enter-previous-names.jsx';
import translations         from '../../i18n'
import { convertToHtml }    from '../../i18n/convert-to-html.jsx';
import {
  hasUsedPreviousNames
} from '../../helpers/data/my-history';

const NamesHistoryPage = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = {props.onSubmit} className='names-history-form'>
      {convertToHtml('h2', translations[locale].myHistory.nameHistoryPage.pagePrompt, 'question')}
        <UsedPreviousNames
          {...props}
        />
        <EnterPreviousNames
          {...props}
          showIf        = { hasUsedPreviousNames(props) }
        />
        <NavigationButtons
          {...props}
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default NamesHistoryPage;
