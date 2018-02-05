'use strict';

import React                from 'react';
import VoterIntro           from './voter-preferences/voter-preferences-intro-form.jsx';
import PreRegIntro          from './voter-preferences/voter-preferences-info-prereg-form.jsx';
import Page                 from '../../containers/page.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import { isPreregistering } from '../../helpers/calculate-age';
import { checkPreReg }      from '../../helpers/data/youth';

const PrefPage = (props) => {
  let showPreregistering = isPreregistering(props.dateOfBirth);

  return (
    <Page
      {...props}
      sectionKey  = {checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit  = { props.onSubmit } >
        <VoterIntro
          {...props}
          showIf      = { !showPreregistering }
        />
        <PreRegIntro
          {...props}
          showIf      = { showPreregistering }
        />
        <NavigationButtons {...props} />
      </form>
    </Page>
  )
};

export default PrefPage;