'use strict';
import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import { checkPreReg }          from '../../helpers/data/youth';
import translations             from '../../i18n';
import Translate                from '../../i18n/translate-tag.jsx';

const VotingConfirmationPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit  = { props.onSubmit } >
        <div className='voter-reg-complete'>
          <Translate tag='h2'>
            {translations.votingRegistration.confirmation.pagePrompt}
          </Translate>
          <Translate tag='p'>
            {translations.votingRegistration.confirmation.explanation}
          </Translate>
        </div>
        <NavigationButtons {...props} />
      </form>
    </Page>
  )
};

export default VotingConfirmationPage;
