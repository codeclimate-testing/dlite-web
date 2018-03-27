'use strict';

import React from 'react';

import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../../containers/page.jsx';
import Accordion              from '../../containers/accordion.jsx';
import RealIdDesignationForm  from './real-id/choose-card-selectors.jsx';
import ChooseRealID           from './real-id/choose-real-id.jsx';
import Translator             from '../../i18n/translator-tag.jsx';

const FormPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit  = { props.onSubmit } >
        <ChooseRealID
          {...props}
          selectedValue = { props.realID }
        />

        <RealIdDesignationForm
          {...props}
        />

       <Accordion
          id    = 'real-id-info'
          title = 'intro.realIdPage.FAQWhatIsRealID.title'
        >
          <Translator
            tag             = 'p'
            translationPath = 'intro.realIdPage.FAQWhatIsRealID.body'
          />
        </Accordion>


        <Accordion
          id    = 'real-id-requirements'
          title = 'intro.realIdPage.FAQWhatIsRequiredForRealID.title'
        >
          <div>
            <Translator
              tag             = 'p'
              translationPath = 'intro.realIdPage.FAQWhatIsRequiredForRealID.body.header'
            />
            <ul className='bullet-list'>
              <Translator
                tag             = 'li'
                translationPath = 'intro.realIdPage.FAQWhatIsRequiredForRealID.body.items.0'
              />
              <Translator
                tag             = 'li'
                translationPath = 'intro.realIdPage.FAQWhatIsRequiredForRealID.body.items.1'
              />
              <Translator
                tag             = 'li'
                translationPath = 'intro.realIdPage.FAQWhatIsRequiredForRealID.body.items.2'
              />
              <Translator
                tag             = 'li'
                translationPath = 'intro.realIdPage.FAQWhatIsRequiredForRealID.body.items.3'
              />
              <Translator
                tag             = 'li'
                translationPath = 'intro.realIdPage.FAQWhatIsRequiredForRealID.body.items.4'
              />
              <Translator
                tag             = 'li'
                translationPath = 'intro.realIdPage.FAQWhatIsRequiredForRealID.body.items.5'
              />
              <Translator
                tag             = 'li'
                translationPath = 'intro.realIdPage.FAQWhatIsRequiredForRealID.body.items.6'
              />
            </ul>
            <Translator
              tag             = 'p'
              translationPath = 'intro.realIdPage.FAQWhatIsRequiredForRealID.body.otherRequirements'
            />
          </div>
        </Accordion>

        <NavigationButtons
          onBack            = { props.onBack }
          errorMessage      = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default FormPage;

