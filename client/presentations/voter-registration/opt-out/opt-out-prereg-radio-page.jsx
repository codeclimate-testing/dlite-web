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
        <h4>Which best describes you?</h4>
        <form onSubmit={props.onSubmit} className='opt-out-form'>
          <OptOutForm {...props} />
          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default PreRegOptOutRadioFormContainer;