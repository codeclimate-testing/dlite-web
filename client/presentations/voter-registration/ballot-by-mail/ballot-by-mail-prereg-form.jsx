'use strict';

import React                  from 'react';

import RadioSelector          from '../../radio-selector.jsx';
import RadioCollection        from '../../radio-selector-collection.jsx';
import NavigationButtons      from '../../navigation-buttons.jsx';
import Page                   from '../../../containers/page.jsx';

const BallotByMailFormPreReg = (props) => {
  let values = {
    Yes: 'Yes',
    No: 'No'
  };
  return (
    <Page
      {...props}
      sectionKey='voterPreRegistration'
    >
      <div>
        <h2 className='question'>Would you like to get your ballot by mail before each election?</h2>
        <p>If you answer Yes, you can still vote in-person.</p>
        <form onSubmit={props.onSubmit} className='ballot-by-mail-form'>

          <div>
            <RadioCollection 
              {...props}
              name='ballotByMail'
              text={values}
            >
              <RadioSelector 
                value='Yes'
              />
              <RadioSelector 
                value='No'
              />
            </RadioCollection>
          </div>

          <div>

            {props.selectedValue === 'Yes' &&
             <p>Ok, your ballot will now come by mail. You can still vote in-person at your polling place.</p>
            }

            {props.selectedValue === 'No' &&
            <p>Ok, you vote in-person at your polling place.</p>
            }

          </div>

          <NavigationButtons {...props} />

        </form>
      </div>
    </Page>
  );
};

export default BallotByMailFormPreReg;
