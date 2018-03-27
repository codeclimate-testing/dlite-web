'use strict';

import React from 'react';
import EndorsementToggle      from './endorsements/endorsement-toggle.jsx';
import ClassACheckboxes       from './endorsements/class-a-checkboxes.jsx';
import ClassBCCheckboxes      from './endorsements/class-b-c-checkboxes.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../../containers/page.jsx';
import Accordion              from '../../containers/accordion.jsx';
import Translator             from '../../i18n/translator-tag.jsx';

const Form = (props) => {

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form className='cdl-endorsements-form' onSubmit={props.onSubmit}>
        <EndorsementToggle
          {...props}
          selectedValue={ props.cdlEndorsements.needEndorsement }
        />

        <ClassACheckboxes
          {...props}
        />

        <ClassBCCheckboxes
          {...props}
        />

      <Accordion
        id      = 'cdl-endorsement-info'
        title   = 'cdl.endorsmentsPage.FAQNotSure.title'
      >
        <div>
          <Translator
            tag             = 'p'
            translationPath = 'cdl.endorsmentsPage.FAQNotSure.body.header'
          />

          <ul className='bullet-list'>
            <Translator
              tag             = 'li'
              translationPath = 'cdl.endorsmentsPage.FAQNotSure.body.listItems.0'
            />
            <Translator
              tag             = 'li'
              translationPath = 'cdl.endorsmentsPage.FAQNotSure.body.listItems.1'
            />
            <Translator
              tag             = 'li'
              translationPath = 'cdl.endorsmentsPage.FAQNotSure.body.listItems.2'
            />
            <Translator
              tag             = 'li'
              translationPath = 'cdl.endorsmentsPage.FAQNotSure.body.listItems.3'
            />
          </ul>
          <Translator
            tag             = 'p'
            translationPath = 'cdl.endorsmentsPage.FAQNotSure.body.explanation'
            />
        </div>
      </Accordion>

        <NavigationButtons
          {...props}
          errorMessage={props.validations.all()}
        />
      </form>
    </Page>
  )
};

export default Form;
