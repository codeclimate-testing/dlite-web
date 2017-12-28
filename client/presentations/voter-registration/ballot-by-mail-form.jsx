'use strict';

import React                from 'react';

import SelectorCollection   from '../selector-collection.jsx';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../page.jsx';
import FAQDrawer            from '../faq-drawer.jsx';

const VALUES = ['Yes', 'No'];
const FAQ_CLASSNAME_YES = 'faq-ballot-by-mail-yes';
const MESSAGE_YES = 'Ok, your ballot will now come by mail. You can still vote in-person at your polling place.';
const FAQ_CLASSNAME_NO = 'faq-ballot-by-mail-no';
const MESSAGE_NO = 'Ok, you vote in-person at your polling place.';

const BallotByMailForm = (props) => {

  return (
    <Page
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
      {...props}
    >
      <div>
        <h4>Would you like to get your ballot by mail before each election?</h4>
        <p>If you answer Yes, you can still vote in-person.</p>
        <form onSubmit={props.onSubmit} className='ballot-by-mail-form'>

          <div className='inner-bottom'>
            <SelectorCollection
              name='ballotByMail'
              values={VALUES}
              onChange={props.onChange}
              selectedValue={props.selectedValue}
            />
          </div>

          <div className='inner-bottom'>

            {props.selectedValue === 'Yes' &&
              <FAQDrawer
                faqDrawerClass={FAQ_CLASSNAME_YES}
                faqDrawerText={MESSAGE_YES}
              />
            }

            {props.selectedValue === 'No' &&
              <FAQDrawer
                faqDrawerClass={FAQ_CLASSNAME_NO}
                faqDrawerText={MESSAGE_NO}
              />
            }

          </div>

          <NavigationButtons {...props} />

        </form>
      </div>
    </Page>
  );
};

export default BallotByMailForm;
