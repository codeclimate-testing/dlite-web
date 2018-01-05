'use strict';

import React                    from 'react';
import NavigationButtons        from '../../navigation-buttons.jsx';
import Page                     from '../../../containers/page.jsx';
import PreRegContactChoice      from './contact-methods-prereg-choice.jsx';
import ContactDetails           from './contact-methods-details.jsx';

const PreRegContactMethodsPage = (props) => {

  return (
     <Page
      {...props}
      sectionKey='voterRegistration'>

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
