'use strict';
import React                  from 'react';
import Page                   from '../../containers/page.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import VoterIntro             from './introduction/introduction.jsx';
import PreRegVoterIntro       from './introduction/introduction-prereg.jsx';
import { isPreregistering }   from '../../helpers/calculate-age';
import { checkPreReg }        from '../../helpers/data/youth';

const IntroPage = (props) => {
  let showPreregistering = isPreregistering(props.dateOfBirth);
  console.log(checkPreReg(props.dateOfBirth))
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit  = { props.onSubmit}>
        <VoterIntro
          {...props}
          showIf      = { !showPreregistering }
        />
        <PreRegVoterIntro
          {...props}
          showIf      = { showPreregistering }
        />
        <NavigationButtons {...props} />
      </form>

    </Page>
  );
};

export default IntroPage;