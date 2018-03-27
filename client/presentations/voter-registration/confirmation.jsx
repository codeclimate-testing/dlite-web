'use strict';
import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import { checkPreReg }          from '../../helpers/data/youth';
import Translator               from '../../i18n/translator-tag.jsx';

const VotingConfirmationPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}
    >
      <form onSubmit  = { props.onSubmit } >
        <div className='voter-reg-complete'>
          <Translator
            tag             = 'h2'
            translationPath = 'votingRegistration.confirmation.pagePrompt'
          />
          <Translator
            tag             = 'p'
            translationPath = 'votingRegistration.confirmation.explanation'
          />
        </div>
        <NavigationButtons {...props} />
      </form>
    </Page>
  )
};

export default VotingConfirmationPage;
