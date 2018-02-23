'use strict';

import React from 'react';

import RadioCollection          from '../radio-selector-collection.jsx';
import radioYesNoGroup          from '../radio-yes-no-group.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../../containers/page.jsx';
import Accordion                from '../../containers/accordion.jsx';
import MessageBox               from '../message-box.jsx';
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

const ReducedFeeFormInfo = (props) => {
  if (!choosingReducedFee(props)) { return null; }

  return (
    <div className='reduced-fee-form-info'>
      <MessageBox className='info'>
        {convertToHtml('p', translations.intro.reducedFeePage.rightFormsSection.explanation)}
      </MessageBox>

      <Accordion
        id='reduced-fee-form-info'
        title={translations.intro.reducedFeePage.rightFormsSection.FAQHowToGetForms.title}
      >
        {convertToHtml('p', translations.intro.reducedFeePage.rightFormsSection.FAQHowToGetForms.body)}
      </Accordion>
    </div>
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

          <ReducedFeeFormInfo {...props} />

          <NavigationButtons {...props}
            errorMessage     = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  );
};

export default Form;
