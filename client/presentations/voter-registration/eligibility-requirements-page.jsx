'use strict';

import React from 'react';

import RadioSelector      from '../radio-selector.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';

const YouthPoint = (props) => {
  if (props.prereg !== 'voterPreRegistration'){ return null; }
  return <li>I am 16 or 17 years old and would like to pre-register to vote</li>
};

const text = {
  'voterPreRegistration': 'If you don\'t meet all the requirements, you are not eligible to pre-register to vote.',
  'voterRegistration': 'If you don\'t meet all the requirements, you are not eligible to register to vote.'
};

const EligibilityRequirements = (props) => {
  return (
    <Page
      {...props}
      sectionKey={props.prereg}
    >
      <div>
        <h2 className='question'>Do you meet all of the voter registration requirements listed below?</h2>
        <ul className='bullet-list'>
          <li>I am a United States citizen</li>
          <li>I am a resident of California</li>
          <YouthPoint prereg = {props.prereg} />
          <li>I am not currently in state or federal prison or on parole for the conviction of a felony</li>
          <li>I am not currently found mentally incompetent to vote by a court</li>
        </ul>

        <p>If you decline to answer, you cannot register to vote.</p>

          <form onSubmit={props.onSubmit} className='eligibility-requirements-form'>
          <div>
            <RadioCollection
              {...props}
              name='eligibilityRequirements'
            >
              <RadioSelector
                value='Yes'
              />
              <RadioSelector
                value='No'
                text='No'
              />
              <RadioSelector
                value='decline'
                text='Decline to answer'
              />
            </RadioCollection>
          </div>

          <NavigationButtons {...props} />
          </form>

        <p><b>What if I don't meet the requirements?</b></p>
        <p>{text[props.prereg]}</p>
        <p>Your response to this question <b>will not</b> be shared with election officials.</p>

      </div>
    </Page>
  );
};


export default EligibilityRequirements;
