'use strict';

import React                  from 'react';

import Page                   from '../../../containers/page.jsx';
import OptOutForm             from './opt-out-form.jsx';
import NavigationButtons      from '../../navigation-buttons.jsx';


const OptOutRadioFormContainer = (props) => {
  return (
    <Page
      {...props}
      sectionKey='voterRegistration'
    >
      <form onSubmit={props.onSubmit}>
        <div className='opt-out-form'>
          <h2 className='question'>Which best describes you?</h2>
            <OptOutForm {...props} />
            <NavigationButtons {...props} />
        </div>
      </form>
    </Page>
  )
};

export default OptOutRadioFormContainer;


