'use strict';

import React                           from 'react';
import NavigationButtons               from '../../navigation-buttons.jsx';
import Page                            from '../../../containers/page.jsx';
import OtherStateLicenseInfo           from '../my-history/other-state-licenses/other-state-license-info.jsx';
import TenYearHistory                  from '../my-history/other-state-licenses/ten-year-history.jsx';
import Translator                      from '../../../i18n/translator-tag.jsx';
import { hasOtherStateLicenses }       from '../../../helpers/data/my-history';

const OtherStateLicenses = (props) => {

  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit={props.onSubmit} className='other-state-licenses-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'tenYearHistoryPage.prompt'
        />
        <Translator
          tag             = 'p'
          translationPath = 'tenYearHistoryPage.explanation'
        />
        <OtherStateLicenseInfo
          {...props}
          selectedValue = {props.otherStateLicenses.hasNonCALicense}
        />
        <TenYearHistory
          {...props}
          showIf = { hasOtherStateLicenses(props) }
        />
        <NavigationButtons
          {...props}
          errorMessage  = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default OtherStateLicenses;
