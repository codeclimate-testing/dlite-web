'use strict';

import React                    from 'react';
import RadioSelector            from '../radio-selector.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Page                     from '../../containers/page.jsx';
import ContactDetails           from './contact-methods/contact-methods-details.jsx';

const ContactMethodsPage = (props) => {
  return (
     <Page
      {...props}
      sectionKey={props.prereg}>

      <form onSubmit={props.onSubmit} className='contact-methods-choice-form'>
        <h2 className='question'>Would you like to receive election information via email or text</h2>

        <RadioCollection
          {...props}
          name          = 'shouldContact'
          selectedValue = {props.contactMethods.shouldContact}
          errorMessage  = {props.validations.shouldContact()}
        >
          <RadioSelector
            value='Yes'
          />
          <RadioSelector
            value='No'
          />
          <RadioSelector
            value='Skip'
            text='Skip Section'
          />
        </RadioCollection>

        <div>
          <p>Who gets this information?</p>
          <p>Secretary of State and County election officials have access to this information.</p>
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
