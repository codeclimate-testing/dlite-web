'use strict';

import React                  from 'react';
import Page                   from '../../containers/page.jsx';
import EnterDLInfo            from '../get-started/current-card-info/enter-info.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';

const Form = (props) => {

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='current-card-form'>
        <form onSubmit      = {props.onSubmit }>

          <EnterDLInfo
            {...props}
            textDescription = 'DL number'
            showIf          = {true}
          >
            <h2 className='question'>If you know it, please enter your California CDL number.</h2>
            <p>Your number can be found at the top of your commercial driver license, starting with a letter.</p>
          </EnterDLInfo>
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