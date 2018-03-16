'use strict';

import React from 'react';

import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../../containers/page.jsx';
import Accordion              from '../../containers/accordion.jsx';
import RealIdDesignationForm  from './real-id/choose-card-selectors.jsx';
import ChooseRealID           from './real-id/choose-real-id.jsx';
import translations           from '../../i18n';
import Translation            from '../../i18n/translate-tag.jsx';

const FormPage = (props) => {
  let locale = props.locale;
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
          id='real-id-info'
          title={translations[locale].intro.realIdPage.FAQWhatIsRealID.title}
        >
          <Translation tag='p'>
            {translations[locale].intro.realIdPage.FAQWhatIsRealID.body}
          </Translation>
        </Accordion>


        <Accordion
          id='real-id-requirements'
          title={translations[locale].intro.realIdPage.FAQWhatIsRequiredForRealID.title}
        >
          <div>
            <Translation tag='p'>
              {translations[locale].intro.realIdPage.FAQWhatIsRequiredForRealID.body.header}
            </Translation>
            <ul className='bullet-list'>
              <Translation tag='li'>
                {translations[locale].intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[0]}
              </Translation>
              <Translation tag='li'>
                {translations[locale].intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[1]}
              </Translation>
              <Translation tag='li'>
                {translations[locale].intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[2]}
              </Translation>
              <Translation tag='li'>
                {translations[locale].intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[3]}
              </Translation>
              <Translation tag='li'>
                {translations[locale].intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[4]}
              </Translation>
              <Translation tag='li'>
                {translations[locale].intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[5]}
              </Translation>
              <Translation tag='li'>
                {translations[locale].intro.realIdPage.FAQWhatIsRequiredForRealID.body.items[6]}
              </Translation>
            </ul>
            <Translation tag='p'>
              {translations[locale].intro.realIdPage.FAQWhatIsRequiredForRealID.body.otherRequirements}
            </Translation>
          </div>
        </Accordion>

        <NavigationButtons
          locale            = { locale }
          onBack            = { props.onBack }
          errorMessage      = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default FormPage;

