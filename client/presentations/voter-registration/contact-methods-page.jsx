'use strict';

import React                    from 'react';
import RadioSelector            from '../radio-selector.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../../containers/page.jsx';
import ContactDetails           from './contact-methods/contact-methods-details.jsx';
import translations             from '../../i18n';
import { checkPreReg }          from '../../helpers/data/youth';

const ContactMethodsPage = (props) => {
  return (
     <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}>

      <form onSubmit={props.onSubmit} className='contact-methods-choice-form'>
        <h2 className='question'>{translations.votingRegistration.contactInfoPage.pagePrompt}</h2>

        <fieldset>
        <RadioCollection
          {...props}
          name          = 'shouldContact'
          selectedValue = {props.contactMethods.shouldContact}
          errorMessage  = {props.validations.shouldContact()}
        >
          <RadioSelector
            value='Yes'
            text={translations.shared.commonAnswers.Yes}
          />
          <RadioSelector
            value='No'
            text={translations.shared.commonAnswers.No}
          />
          <RadioSelector
            value='Skip'
            text={translations.shared.commonAnswers.skipSection}
          />
        </RadioCollection>
        </fieldset>

        <div>
          <p className='translation-missing'>Who gets this information?</p>
          <p className='translation-missing'>Secretary of State and County election officials have access to this information.</p>
        </div>

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
