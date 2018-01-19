'use strict';

import React              from 'react';
import NumberInput        from '../number-input.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Page               from '../../containers/page.jsx';

const TraitsPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey='myBasics'
    >
      <div className='traits-height-weight-form'>
        <h2 className='question'>How tall are you?</h2>
        <p>Example: 5 feet 9 inches</p>

        <form onSubmit={ props.onSubmit } >
          <div className='row'>
            <NumberInput
              {...props}
              identifier='heightFeet'
              description='Feet'
              value={ props.traitsHeightWeight.heightFeet }
              errorMessage={ props.validations.heightFeet() }
            />

            <div className='unit spacer' />

            <NumberInput
              {...props}
              identifier='heightInches'
              description='Inches'
              value={ props.traitsHeightWeight.heightInches }
              errorMessage={ props.validations.heightInches() }
            />
          </div>

        <hr/>
        <h2 className='question'>And how much do you weigh?</h2>
        <p>Example: 190 pounds</p>

          <div className='row'>
            <NumberInput
              {...props}
              identifier='weight'
              description='Pounds'
              value={ props.traitsHeightWeight.weight }
              errorMessage={ props.validations.weight() }
            />
          </div>

          <NavigationButtons
            {...props}
            errorMessage={props.validations.all()}
          />
        </form>
      </div>
    </Page>
  );
};

export default TraitsPage;
