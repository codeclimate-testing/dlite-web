'use strict';

import React                from 'react';
import VoterUpdated         from './voter-preferences-updated/voter-preferences-intro-updated-form.jsx';
import PreRegUpdated        from './voter-preferences-updated/voter-preferences-info-prereg-updated-form.jsx';
import Page                 from '../../containers/page.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import { isPreregistering } from '../../helpers/calculate-age';
import { checkPreReg }          from '../../helpers/data/youth';

const PrefUpdatedPage = (props) => {
  let showPreregistering = isPreregistering(props.dateOfBirth);
  return (
    <Page
      {...props}
      sectionKey  = { checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit  = { props.onSubmit }>
        <VoterUpdated
          {...props}
          showIf      = { !showPreregistering }
        />
        <PreRegUpdated
          {...props}
          showIf      = { showPreregistering}
        />
        <NavigationButtons {...props} />
      </form>
    </Page>
  );
};

export default PrefUpdatedPage;