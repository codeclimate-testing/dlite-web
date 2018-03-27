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
import Translator               from '../../i18n/translator-tag.jsx';

const DLText = (props) => {
  if (!hasMultipleCards(props)) { return null; }
  return (
    <Translator
      tag             = 'p'
      translationPath = 'intro.reducedFeePage.licenseExplanation'
    />
  );
};

const ReducedFeeFormInfo = (props) => {
  return (
    <div className='reduced-fee-form-info'>
      <MessageBox className='info'>
        <Translator
          tag             = 'p'
          translationPath = 'intro.reducedFeePage.rightFormsSection.explanation'
        />
      </MessageBox>

      <Accordion
        id    = 'reduced-fee-form-info'
        title = 'intro.reducedFeePage.rightFormsSection.FAQHowToGetForms.title'
      >
        <Translator
          tag             = 'p'
          translationPath = 'intro.reducedFeePage.rightFormsSection.FAQHowToGetForms.body'
        />
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
          <Translator
            tag             = 'h2'
            className       = 'question'
            translationPath = 'intro.reducedFeePage.prompt'
          />

          <DLText {...props} />

          <div className='row'>
            <fieldset role='group' aria-label='Reduced fee choice'>
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
