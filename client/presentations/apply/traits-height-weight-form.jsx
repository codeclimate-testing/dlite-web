'use strict';

import React              from 'react';
import NumberInput        from '../number-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../page.jsx';

const Form = (props) => {
  return (
    <Page
      sectionNumber='1'
      sectionName='My basics'
      {...props}
    >
      <div className='traits-height-weight-form'>
        <h4>How tall are you?</h4>
        <h5>Example: 5 feet 9 inches</h5>

        <form onSubmit={ props.onSubmit } >
          <div className='row inner-bottom'>
            <NumberInput
              onChange={ props.onChange }
              identifier='heightFeet'
              description='Feet'
              value={ props.traitsHeightWeight.heightFeet }
            />

            <div className='unit spacer' />

            <NumberInput
              onChange={ props.onChange }
              identifier='heightInches'
              description='Inches'
              value={ props.traitsHeightWeight.heightInches }
            />
          </div>

        <h4>And how much do you weigh?</h4>
        <h5>Example: 190 pounds</h5>

          <div className='row inner-bottom'>
            <NumberInput
              onChange={ props.onChange }
              identifier='weight'
              description='Pounds'
              value={ props.traitsHeightWeight.weight }
            />
          </div>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default Form;
