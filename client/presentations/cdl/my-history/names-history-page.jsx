'use strict';

import React                from 'react';
import NavigationButtons    from '../../navigation-buttons.jsx';
import Page                 from '../../../containers/page.jsx';
import EnterPreviousNames    from '../../my-history/names-history/enter-previous-names.jsx';
import UsedPreviousNames   from '../../my-history/names-history/used-previous-names.jsx';
import { hasUsedPreviousNames }       from '../../../helpers/data/my-history';
import translations         from '../../../i18n';

const NamesHistoryPage = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit={props.onSubmit} className='names-history-form'>
        <h2 className='question translation-missing'>Have you ever applied for a California CDL, driver license, or ID card under a different name?</h2>
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
