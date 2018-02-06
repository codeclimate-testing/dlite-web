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
import translations             from '../../i18n';
import { convertToHtml }        from '../../i18n/convert-to-html.jsx';

const DLText = (props) => {
  if (!hasMultipleCards(props)) { return null; }

  return (
    convertToHtml('p', translations.intro.reducedFeePage.licenseExplanation)
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
          {convertToHtml('h2', translations.intro.reducedFeePage.prompt, 'question')}

          <DLText {...props} />

          <div className='row'>
            <fieldset>
              <RadioCollection
                {...props}
                name='ID'
                selectedValue = { props.reducedFee.ID }
                errorMessage  = { props.validations.reducedFee() }
              >
                { radioYesNoGroup() }
              </RadioCollection>
            </fieldset>

          </div>

          <HasCorrectFormQuestion {...props} />

          <NavigationButtons {...props}
            errorMessage     = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  );
};

export default Form;
