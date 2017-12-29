'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';
import UsedPreviousNames    from './names-history/used-previous-names.jsx';
import EnterPreviousNames   from './names-history/enter-previous-names.jsx';

const NamesHistoryPage = (props) => {
  return (
    <Page 
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = {props.onSubmit} className='names-history-form'>
        <UsedPreviousNames {...props}
          selectedValue = {props.namesHistory.hasUsedPreviousNames}
        />
        <br></br>
        <EnterPreviousNames {...props}
        />
        <NavigationButtons {...props}/>
      </form>
    </Page>
  )
};

export default NamesHistoryPage;
