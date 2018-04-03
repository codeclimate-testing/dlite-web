'use strict';

import React                from 'react';
import NavigationButtons    from '../../navigation-buttons.jsx';
import Page                 from '../../../containers/page.jsx';
import EnterPreviousNames    from '../../my-history/names-history/enter-previous-names.jsx';
import UsedPreviousNames   from '../../my-history/names-history/used-previous-names.jsx';
import { hasUsedPreviousNames }       from '../../../helpers/data/my-history';
import Translator            from '../../../i18n/translator-tag.jsx';

const NamesHistoryPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit={props.onSubmit} className='names-history-form'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'newApproved.cdl.myHistory.nameHistory.prompt'
      />
        <UsedPreviousNames
          {...props}
          selectedValue = {props.namesHistory.hasUsedPreviousNames}
        />
        <EnterPreviousNames
          {...props}
          showIf = { hasUsedPreviousNames(props) }
        />
        <NavigationButtons
          {...props}
          errorMessage  = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default NamesHistoryPage;
