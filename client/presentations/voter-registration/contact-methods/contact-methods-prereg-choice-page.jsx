'use strict';

import React                    from 'react';
import NavigationButtons        from '../../navigation-buttons.jsx';
import Page                     from '../../../containers/page.jsx';
import PreRegContactChoice      from '../../../presentations/voter-registration/contact-methods/contact-methods-prereg-choice.jsx';
import ContactDetails           from '../../../presentations/voter-registration/contact-methods/contact-methods-details.jsx';

const PreRegContactMethodsPage = (props) => {

  return (
    <Page
      {...props}
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
    >

    <form onSubmit={props.onSubmit}>
        <PreRegContactChoice
          {...props}
          onChange={props.onChange}
          selectedValue={props.contactMethods.shouldContact}
        />

        <ContactDetails
        {...props} 
        onChange={props.onChange}
        contactDetails={props.contactMethods}
        />
        
        <NavigationButtons {...props} />
      </form>
    </Page>
  );
};


export default PreRegContactMethodsPage;
