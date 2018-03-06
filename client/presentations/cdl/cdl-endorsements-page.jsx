'use strict';

import React from 'react';
import EndorsementToggle      from './endorsements/endorsement-toggle.jsx';
import ClassACheckboxes       from './endorsements/class-a-checkboxes.jsx';
import ClassBCCheckboxes      from './endorsements/class-b-c-checkboxes.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../../containers/page.jsx';
import Accordion              from '../../containers/accordion.jsx';
import translations           from '../../i18n';
import { convertToHtml }      from '../../i18n/convert-to-html.jsx';

const Form = (props) => {
  let locale = props.locale;
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
          id='cdl-endorsement-info'
          title={translations[locale].cdl.endorsmentsPage.FAQNotSure.title}
        >
          <div>
          {convertToHtml('p', translations[locale].cdl.endorsmentsPage.FAQNotSure.body.header)}
            <ul className='bullet-list'>
              {convertToHtml('li', translations[locale].cdl.endorsmentsPage.FAQNotSure.body.listItems[0])}
              {convertToHtml('li', translations[locale].cdl.endorsmentsPage.FAQNotSure.body.listItems[1])}
              {convertToHtml('li', translations[locale].cdl.endorsmentsPage.FAQNotSure.body.listItems[2])}
              {convertToHtml('li', translations[locale].cdl.endorsmentsPage.FAQNotSure.body.listItems[3])}
            </ul>
          {convertToHtml('p', translations[locale].cdl.endorsmentsPage.FAQNotSure.body.explanation)}
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
