'use strict';

import React                   from 'react';

import Page                    from '../../../containers/page.jsx';
import OptOutForm              from './opt-out-prereg-form.jsx';
import NavigationButtons       from '../../navigation-buttons.jsx';

const PreRegOptOutRadioFormContainer = (props) => {
  return (
     <Page
      {...props}
      sectionKey='voterPreRegistration'
    >
      <div>
        <h2 className='question'>Which best describes you?</h2>
        <form onSubmit={props.onSubmit} className='opt-out-form'>
          <OptOutForm {...props} />
          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default PreRegOptOutRadioFormContainer;
