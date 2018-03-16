'use strict';

import React                 from 'react';
import NavigationButtons     from '../../navigation-buttons.jsx';
import Page                  from '../../../containers/page.jsx';
import OtherStateLicenseInfo from '../my-history/other-state-licenses/other-state-license-info.jsx';
import TenYearHistory        from '../my-history/other-state-licenses/ten-year-history.jsx';
import translations          from '../../../i18n';
import Translation           from '../../../i18n/translate-tag.jsx';
import { hasOtherStateLicenses }       from '../../../helpers/data/my-history';

const OtherStateLicenses = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit={props.onSubmit} className='other-state-licenses-form'>
        <Translation tag='h2' className='question'>
          {translations[locale].tenYearHistoryPage.prompt}
        </Translation>
        <Translation tag='p'>
          {translations[locale].tenYearHistoryPage.explanation}
        </Translation>
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
