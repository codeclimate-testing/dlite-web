'use strict';

import React                    from 'react';
import RadioSelector            from '../radio-selector.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../../containers/page.jsx';
import ContactDetails           from './contact-methods/contact-methods-details.jsx';
import { checkPreReg }          from '../../helpers/data/youth';
import Translator               from '../../i18n/translator-tag.jsx';
import {
  RadioSelectorYesTranslation,
  RadioSelectorNoTranslation
} from '../shared/translations-radio-selector.jsx';

const ContactMethodsPage = (props) => {
  return (
     <Page
      {...props}
      sectionKey={checkPreReg(props.dateOfBirth)}>

      <form onSubmit={props.onSubmit} className='contact-methods-choice-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'votingRegistration.contactInfoPage.pagePrompt'
          tabIndex        = '0'
        />

        <fieldset role='group' aria-label='Do you want to be contacted'>
          <RadioCollection
            {...props}
            name          = 'shouldContact'
            selectedValue = {props.contactMethods.shouldContact}
            errorMessage  = {props.validations.shouldContact()}
          >
            <RadioSelector
              value = 'Yes'
              text  = { <RadioSelectorYesTranslation /> }
            />
            <RadioSelector
              value = 'No'
              text  = { <RadioSelectorNoTranslation /> }
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
