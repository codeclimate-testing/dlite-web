'use strict';

import React              from 'react';
import ReplacementReason  from './replacement-details/replacement-reason-form.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const Form = (props) => {

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-replacement-detail'>
        <h2 className='question'>Why do you need to replace your card?</h2>
        <p>Your answer will help DMV employees better assist you.</p>
        <form onSubmit={ props.onSubmit }>
          <ReplacementReason {...props} />
          <NavigationButtons 
            errorMessage = { props.validations.reason() }
            {...props} 
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
