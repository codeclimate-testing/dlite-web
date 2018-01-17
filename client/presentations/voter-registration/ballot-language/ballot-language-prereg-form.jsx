'use strict';

import React                from 'react';

import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import Page               from '../../../containers/page.jsx';
import NavigationButtons  from '../../navigation-buttons.jsx';

const values = {
  English   : 'English',
  Chinese   : 'Chinese',
  Japanese  : 'Japanese',
  Spanish   : 'Spanish',
  Thai      : 'Thai',
  Korean    : 'Korean',
  Tagalog   : 'Tagalog',
  Hindi     : 'Hindi',
  Khmer     : 'Khmer',
  Vietnamese: 'Vietnamese'
};

const BallotLanguageFormPreReg = (props) => {

  return (
     <Page
      {...props}
      sectionKey='voterPreRegistration'
    >
      <div>
        <h2 className='question'>Choose a language for your election materials.</h2>
        <form onSubmit={props.onSubmit} className='ballot-language-form'>
          <div>
            <RadioCollection  
              {...props}
              name='ballotLanguage'
              text={values}
            >
              <RadioSelector
                value='English'
              />
              <RadioSelector
                value='Chinese'
              />
              <RadioSelector
                value='Japanese'
              />
              <RadioSelector
                value='Spanish'
              />
              <RadioSelector
                value='Thai'
              />
              <RadioSelector
                value='Korean'
              />
              <RadioSelector
                value='Tagalog'
              />
              <RadioSelector
                value='Hindi'
              />
              <RadioSelector
                value='Khmer'
              />
              <RadioSelector
                value='Vietnamese'
              />
          </RadioCollection>
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default BallotLanguageFormPreReg;
