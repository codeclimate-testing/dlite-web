'use strict';

import React from 'react';

import RadioCollection          from '../radio-selector-collection.jsx';
import radioYesNoGroup          from '../radio-yes-no-group.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../../containers/page.jsx';
import Accordion                from '../../containers/accordion.jsx';
import HasCorrectFormQuestion   from './reduced-fee/has-correct-form-question.jsx';
import { hasMultipleCards }     from '../../helpers/data/cards';
import { choosingReducedFee }   from '../../helpers/data/reduced-fee';

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
              selectedValue= { props.reducedFee.ID }
              errorMessage  = { props.validations.reducedFee() }
            >
              { radioYesNoGroup() }
            </RadioCollection>

          </div>

          <HasCorrectFormQuestion {...props} />

          <NavigationButtons {...props}
            errorMessage      = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  );
};

export default Form;
