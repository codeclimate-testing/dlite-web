'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import RadioSelector        from '../radio-selector.jsx';
import RadioCollection      from '../radio-selector-collection.jsx';
import Page                 from '../../containers/page.jsx';

const allOptionText = {
  voterRegistration: {
    new       : 'I am a new voter in California',
    existing  : 'I am already registered to vote in California',
    optOut    : 'I am eligible to vote, but do not want to register to vote'
  },
  voterPreRegistration: {
    new       : 'I would like to pre-register to vote',
    existing  : 'I am already pre-registered to vote in California',
    optOut    : 'I am eligible to vote, but do not want to pre-register to vote'
  }
};

const OptOutPage = (props) => {
  let optionText = allOptionText[props.prereg];

  return (
    <Page
      {...props}
      sectionKey={props.prereg}
    >
      <form onSubmit={props.onSubmit} className = 'opt-out-form'>
      <h2 className='question'>Which best describes you?</h2>

      <RadioCollection
        {...props}
        name          = 'optOut'
        errorMessage  = {props.validations.optOut()}
      >
        <RadioSelector
          value='new'
          text={ optionText.new }
        />
        <RadioSelector
          value='existing'
          text={ optionText.existing }
        />
        <RadioSelector
          value='optOut'
          text={ optionText.optOut }
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

export default OptOutPage;
