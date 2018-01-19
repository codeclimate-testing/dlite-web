'use strict';

import React from 'react';

import RadioCollection          from '../radio-selector-collection.jsx';
import RadioSelector            from '../radio-selector.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../../containers/page.jsx';
import Accordion                from '../../containers/accordion.jsx';
import { hasMultipleCards }     from '../../helpers/data/cards';
import { choosingReducedFee }   from '../../helpers/data/reduced-fee';

let values = {
  Yes: 'Yes',
  No: 'No'
};

const FormQuestion = (props) => {
  if (!choosingReducedFee(props)) { return null; }

  return (
    <div>
      <hr />
      <h2 className='question'>Do you have the right form?</h2>
      <p>
        In order to get a reduced fee you need to have form 937.
        To get a free ID you need to have form 933.
      </p>
      <RadioCollection
        {...props}
        name='form'
        selectedValue= { props.reducedFee.form }
        text={values}
        errorMessage  = { props.validations.form() }
      >
        <RadioSelector
          value='Yes'
        />
        <RadioSelector
          value='No'
        />
      </RadioCollection>

      <Accordion
        id='reduced-fee-form-info'
        title='How do I get these forms?'
      >
        <p>
          The DMV does not provide these forms. If you get assistance through
          the government or a non-profit, speak with them about getting a form.
        </p>
      </Accordion>
    </div>
  );
};

const DLText = (props) => {
  if (!hasMultipleCards(props)) { return null; }

  return (
    <p>
      This only applies to your ID Card. You cannot get a free or reduced
      fee driver license.
    </p>
  );
};

const Form = (props) => {

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='reduced-fee-form'>
        <form onSubmit={ props.onSubmit } >
          <h2 className='question'>Are you applying for a reduced fee or free ID?</h2>

          <DLText {...props} />

          <div className='row'>
            <RadioCollection 
              {...props}
              name='ID'
              text={values}
              selectedValue= { props.reducedFee.ID }
              errorMessage  = { props.validations.reducedFee() }
            >
              <RadioSelector
                value='Yes'
              />
              <RadioSelector
                value='No'
              />
            </RadioCollection>
 
          </div>

          <FormQuestion {...props} />

          <NavigationButtons {...props}
            errorMessage      = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
