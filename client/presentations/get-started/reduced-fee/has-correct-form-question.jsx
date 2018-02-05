'use strict';

import React from 'react';

import Accordion                from '../../../containers/accordion.jsx';
import RadioCollection          from '../../radio-selector-collection.jsx';
import radioYesNoGroup          from '../../radio-yes-no-group.jsx';

import { choosingReducedFee }   from '../../../helpers/data/reduced-fee';

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

      <fieldset>
        <RadioCollection
          {...props}
          name = 'form'
          selectedValue = { props.reducedFee.form }
          errorMessage = { props.validations.form() }
        >
          {radioYesNoGroup()}
        </RadioCollection>
      </fieldset>

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

export default FormQuestion;


