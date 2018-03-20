'use strict';

import React                  from 'react';
import Page                   from '../../containers/page.jsx';
import YesNoForm              from './current-dl/yes-no-form.jsx';
import TestsInfo              from './current-dl/test-info.jsx';
import EnterDLInfo            from '../get-started/current-card-info/enter-info.jsx';
import ExplanationString      from './current-dl/explanation-string.jsx';
import ExpiredMessage         from './current-dl/expired-message.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import { needsCurrentDLInfo}  from '../../helpers/data/cdl';
import translations           from '../../i18n';

const Form = (props) => {
  let locale = props.locale
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>
        <form onSubmit      = {props.onSubmit }>

          <YesNoForm {...props} />
          <TestsInfo
            {...props}
            currentCardInfo = {props.currentCardInfo}
          />
          <EnterDLInfo
            {...props}
            textDescription = {translations[locale].cdl.caDlPage.yesSection.dlNumberLabel}
            showIf          = {needsCurrentDLInfo(props)}
          >
            <ExplanationString
              {...props}
              showIf        = {needsCurrentDLInfo(props)}
            />
          </EnterDLInfo>
          <ExpiredMessage
            {...props}
            currentCardInfo = {props.currentCardInfo}
          />
          <NavigationButtons
            {...props}
            errorMessage    = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
