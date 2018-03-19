'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';
import UsedPreviousNames    from './names-history/used-previous-names.jsx';
import EnterPreviousNames   from './names-history/enter-previous-names.jsx';
import Translator           from '../../i18n/translator-tag.jsx';
import {
  hasUsedPreviousNames
} from '../../helpers/data/my-history';

const NamesHistoryPage = (props) => {

  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = {props.onSubmit} className='names-history-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'myHistory.nameHistoryPage.pagePrompt'
        />
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
