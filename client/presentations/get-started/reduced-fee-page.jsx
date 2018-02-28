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
  let locale = props.locale;
  return (
    convertToHtml('p', translations[locale].intro.reducedFeePage.licenseExplanation)
  );
};

const ReducedFeeFormInfo = (props) => {
  let locale = props.locale;
  return (
    <div className='reduced-fee-form-info'>
      <MessageBox className='info'>
        {convertToHtml('p', translations[locale].intro.reducedFeePage.rightFormsSection.explanation)}
      </MessageBox>

      <Accordion
        id='reduced-fee-form-info'
        title={translations[locale].intro.reducedFeePage.rightFormsSection.FAQHowToGetForms.title}
      >
        {convertToHtml('p', translations[locale].intro.reducedFeePage.rightFormsSection.FAQHowToGetForms.body)}
      </Accordion>
    </div>
  );
};

const Form = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='reduced-fee-form'>
        <form onSubmit={ props.onSubmit } >
          {convertToHtml('h2', translations[locale].intro.reducedFeePage.prompt, 'question')}

          <DLText {...props} />

          <div className='row'>
            <fieldset>
              <RadioCollection
                {...props}
                name='ID'
                selectedValue = { props.reducedFee.ID }
                errorMessage  = { props.validations.reducedFee() }
              >
                { radioYesNoGroup(locale) }
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
