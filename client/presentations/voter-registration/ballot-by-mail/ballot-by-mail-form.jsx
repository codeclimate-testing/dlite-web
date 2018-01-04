'use strict';

import React                from 'react';

import SelectorCollection from '../../selector-collection.jsx';
import NavigationButtons  from '../../navigation-buttons.jsx';
import Page               from '../../../containers/page.jsx';

const BallotByMailForm = (props) => {

  return (
    <Page
      {...props}
      sectionKey='voterRegistration'
    >
     
     <form onSubmit={props.onSubmit}>
      <div className='ballot-by-mail-form'>
        <h4>Would you like to get your ballot by mail before each election?</h4>
        <p>If you answer Yes, you can still vote in-person.</p>
        
          <div className='inner-bottom'>
            <SelectorCollection
              name='ballotByMail'
              values={['Yes', 'No']}
              onChange={props.onChange}
              selectedValue={props.selectedValue}
            />
          </div>

          <div className='inner-bottom'>

            {props.selectedValue === 'Yes' &&
             <p>Ok, your ballot will now come by mail. You can still vote in-person at your polling place.</p>
            }

            {props.selectedValue === 'No' &&
            <p>Ok, you vote in-person at your polling place.</p>
            }

          </div>

          <NavigationButtons {...props} />

      </div>
      </form>
    </Page>
  );
};

export default BallotByMailForm;
