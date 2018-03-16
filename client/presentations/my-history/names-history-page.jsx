'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';
import UsedPreviousNames    from './names-history/used-previous-names.jsx';
import EnterPreviousNames   from './names-history/enter-previous-names.jsx';
import translations         from '../../i18n'
import Translation          from '../../i18n/translate-tag.jsx';
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
        <Translation tag='h2' className='question'>
          {translations[locale].myHistory.nameHistoryPage.pagePrompt}
        </Translation>
        <UsedPreviousNames
          {...props}
          selectedValue = { props.namesHistory.hasUsedPreviousNames}
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
