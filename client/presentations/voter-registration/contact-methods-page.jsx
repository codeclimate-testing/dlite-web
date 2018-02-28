'use strict';

import React                    from 'react';
import RadioSelector            from '../radio-selector.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../../containers/page.jsx';
import ContactDetails           from './contact-methods/contact-methods-details.jsx';
import translations             from '../../i18n';
import { checkPreReg }          from '../../helpers/data/youth';
import Translate                from '../../i18n/translate-tag.jsx';

const ContactMethodsPage = (props) => {
  let locale = props.locale;
  return (
     <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}>

      <form onSubmit={props.onSubmit} className='contact-methods-choice-form'>
        <Translate tag='h2' className='question'>
         {translations[locale].votingRegistration.contactInfoPage.pagePrompt}
        </Translate>

        <fieldset>
          <RadioCollection
            {...props}
            name          = 'shouldContact'
            selectedValue = {props.contactMethods.shouldContact}
            errorMessage  = {props.validations.shouldContact()}
          >
            <RadioSelector
              value='Yes'
              text={translations[locale].shared.commonAnswers.yes}
            />
            <RadioSelector
              value='No'
              text={translations[locale].shared.commonAnswers.no}
            />
            <RadioSelector
              value='Skip'
              text={translations[locale].shared.commonAnswers.skip}
            />
          </RadioCollection>
        </fieldset>

        <ContactDetails
          {...props}
        />

        <NavigationButtons
          {...props}
          errorMessage = {props.validations.all()}
        />
      </form>
    </Page>
  );
};


export default ContactMethodsPage;
