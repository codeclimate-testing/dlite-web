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
import Translation              from '../../i18n/translate-tag.jsx';

const DLText = (props) => {
  if (!hasMultipleCards(props)) { return null; }
  let locale = props.locale;
  return (
    <Translation tag='p'>
      {translations[locale].intro.reducedFeePage.licenseExplanation}
    </Translation>
  );
};

const ReducedFeeFormInfo = (props) => {
  let locale = props.locale;
  return (
    <div className='reduced-fee-form-info'>
      <MessageBox className='info'>
        <Translation tag='p'>
          {translations[locale].intro.reducedFeePage.rightFormsSection.explanation}
        </Translation>
      </MessageBox>

      <Accordion
        id='reduced-fee-form-info'
        title={translations[locale].intro.reducedFeePage.rightFormsSection.FAQHowToGetForms.title}
      >
        <Translation tag='p'>
          {translations[locale].intro.reducedFeePage.rightFormsSection.FAQHowToGetForms.body}
        </Translation>
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
          <Translation tag='h2' className='question'>
            {translations[locale].intro.reducedFeePage.prompt}
          </Translation>

          <DLText {...props} />

          <div className='row'>
            <fieldset role='group' aria-label='Reduced fee choice'>
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
