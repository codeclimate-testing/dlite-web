'use strict';

import React from 'react';

import Accordion                from '../../../containers/accordion.jsx';
import RadioCollection          from '../../radio-selector-collection.jsx';
import radioYesNoGroup          from '../../radio-yes-no-group.jsx';
import translations       from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

import { choosingReducedFee }   from '../../../helpers/data/reduced-fee';

const FormQuestion = (props) => {
  if (!choosingReducedFee(props)) { return null; }

  return (
    <div>
      <hr />
      {convertToHtml('h2', translations.intro.reducedFeePage.rightFormsSection.prompt, 'question')}
      {convertToHtml('p', translations.intro.reducedFeePage.rightFormsSection.explanation)}

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
        title={translations.intro.reducedFeePage.rightFormsSection.FAQHowToGetForms.title}
      >
      {convertToHtml('p', translations.intro.reducedFeePage.rightFormsSection.FAQHowToGetForms.body)}
      </Accordion>
    </div>
  );
};

export default FormQuestion;


