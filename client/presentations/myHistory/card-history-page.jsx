'use strict';

import React                    from 'react';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../../containers/page.jsx';

import LicenseAndIdHistory      from "./card-history/license-and-id-history-form.jsx";
import EnterLicenseAndIdHistory from "./card-history/enter-license-and-id-history-form.jsx";

const CardHistoryPage = (props) => {

  return (
    <Page 
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit={props.onSubmit} className='card-history-form'>
        <LicenseAndIdHistory
          {...props}
          selectedValue   = { props.licenseAndIdHistory.isIssued }
        />

        <EnterLicenseAndIdHistory 
          {...props} 
        />

        <NavigationButtons 
          {...props} 
          errorMessage    = { props.validations.all() }
        />
      </form>
    </Page>
  );
};

export default CardHistoryPage;
