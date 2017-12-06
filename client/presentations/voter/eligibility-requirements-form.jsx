'use strict';

import React                    from 'react';

import SelectorCollection      from '../selector-collection.jsx';
import Page                    from '../page.jsx';
import NavigationButtons       from '../navigation-buttons.jsx';
import { getCurrentAge, getAgeGroup }     from '../../helpers/calculate-age';

const VALUES = ['Yes', 'No', 'Skip Section'];
let pageTitle = 'DMV: License application - Voting registration'

const EligibilityRequirements = (props) => {

  let documentHeader = [];
  let documentQuestion = [];
  let documentStatement = [];
  let bulletList = [];
  let documentValues = [];
  let ageGroup = getAgeGroup(props.dateOfBirth.age);

  if (ageGroup === "YOUTH_GREATER_THAN_15_AND_LESS_THAN_18") {
    documentHeader.push(
      'Voting pre-registration'
    )
    documentQuestion.push(
      'pre-registration'
    )
    bulletList.push(<li key='pre-register' >I am 16 or 17 years old and would like to pre-register to vote</li>
    )
    documentStatement.push(
      'pre-register'
    );
  }
  else {
    documentHeader.push(
     'Voting registration'
    )
    documentQuestion.push(
      'registration'
    )
    documentStatement.push(
      'register'
    );
  }

  return (
     <Page
      pageTitle={ pageTitle }
      sectionNumber='3'
      sectionName= { documentHeader }
      {...props} 
      >

      <div>
        <h4>Do you meet all of the voter { documentQuestion } requirements listed below?</h4>

        <ul className='bullet-list'>
        <li>I am a United States citizen</li>
        <li>I am a resident of California</li>
        { bulletList }
        <li>I am not currently in state or federal prison or on parole for the conviction of a felony</li>
        <li>I am not currently found mentally incompetent to vote by a court</li>
        </ul>

        <p>If you answer 'No' or 'Skip Section', you cannot { documentStatement } to vote.</p>
        <br></br>
        <form onSubmit={ props.onSubmit } className='eligibility-requirements-form'>
        <div className='inner-bottom'>
          <SelectorCollection
            name='eligibilityRequirements'
            values={ VALUES }
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>

        <NavigationButtons {...props} />
        </form>
        <br></br>
        <p><b>What if I don't meet the requirements?</b></p>
        <p>If you don't meet all the requirements, you are not eligible to { documentStatement } to vote.</p>
        <p>Your response to this question <b>will not</b> be shared with election officials.</p>
        </div>
      </Page>
  );
};

export default EligibilityRequirements;
