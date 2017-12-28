'use strict';

import React from 'react';

import Page               from '../../containers/page.jsx';
import ChooseCardNew      from './choose-card/choose-card-new.jsx';
import ChooseCardRenew    from './choose-card/choose-card-renew.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const Form = (props) => {

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-form'>
        <h4>What type of card would you like?</h4>

        <form onSubmit={ props.onSubmit } >
  
          <ChooseCardNew 
            {...props}
          />
          <ChooseCardRenew 
            {...props}
          />
          
          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  )
};

export default Form;
