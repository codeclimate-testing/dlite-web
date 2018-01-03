'use strict';

import React                    from 'react';
import NavigationButtons        from '../../navigation-buttons.jsx';
import Page                     from '../../../containers/page.jsx';
import ContactChoice            from '../../../presentations/voter-registration/contact-methods/contact-methods-choice.jsx';
import ContactDetails           from '../../../presentations/voter-registration/contact-methods/contact-methods-details.jsx';

const ContactMethodsPage = (props) => {

  return (
    <Page
      {...props}
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
    >

      <form onSubmit={props.onSubmit}>
        <ContactChoice
          {...props}
          onChange={props.onChange}
          selectedValue={props.contactMethods.shouldContact}
        />

        <ContactDetails
        {...props} 
        onChange={props.onChange}
        contactDetails={props.contactMethods} />

        <NavigationButtons {...props} />
      </form>

    </Page>
  );
};


export default ContactMethodsPage;
