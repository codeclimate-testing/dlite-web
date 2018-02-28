'use strict';

import React                  from 'react';
import Page                   from '../../containers/page.jsx';
import YesNoForm              from './current-dl/yes-no-form.jsx';
import TestsInfo              from './current-dl/test-info.jsx';
import EnterDLInfo            from '../get-started/current-card-info/enter-info.jsx';
import ExplanationString      from './current-dl/explanation-string.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import { needsCurrentDLInfo}  from '../../helpers/data/cdl';

const Form = (props) => {

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>
        <form onSubmit={ props.onSubmit }>

          <YesNoForm {...props} />
          <TestsInfo currentCardInfo = {props.currentCardInfo} />
          <EnterDLInfo
            {...props}
            textDescription = 'DL number'
            showIf = {needsCurrentDLInfo(props)}
          >
            <ExplanationString
              showIf = {needsCurrentDLInfo(props)}
            />
          </EnterDLInfo>
          <NavigationButtons
            {...props}
            errorMessage = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
