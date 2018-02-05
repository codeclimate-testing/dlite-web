'use strict';
import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import VoterRegComplete         from './voter-confirmation/voter-confirmation.jsx';
import PreRegVoterRegComplete   from './voter-confirmation/voter-confirmation-prereg.jsx';
import { isPreregistering }     from '../../helpers/calculate-age';
import { checkPreReg }          from '../../helpers/data/youth';

const ConfPage = (props) => {
  let showPreregistering = isPreregistering(props.dateOfBirth);

  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit  = { props.onSubmit } >
        <VoterRegComplete
          {...props}
          showIf      = { !showPreregistering }
        />
        <PreRegVoterRegComplete
          {...props}
          showIf      = { showPreregistering }
        />
        <NavigationButtons {...props} />
      </form>
    </Page>
  )
};

export default ConfPage;