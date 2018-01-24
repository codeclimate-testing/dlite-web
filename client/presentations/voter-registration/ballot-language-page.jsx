'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Page                 from '../../containers/page.jsx';

const BallotLanguagePage = (props) => {
  return (
    <Page
      {...props}
      sectionKey={props.prereg}
    >
      <form onSubmit={props.onSubmit} className = 'ballot-language-form'>
        <h2 className='question'>Choose a language for your election materials.</h2>
        <RadioCollection
          {...props}
          name          = 'ballotLanguage'
          errorMessage  = {props.validations.ballotLanguage()}
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

        <NavigationButtons
          {...props}
          errorMessage = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default BallotLanguagePage;
